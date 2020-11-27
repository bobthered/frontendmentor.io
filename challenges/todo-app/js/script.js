import Sortable from '../lib/sortablejs/modular/sortable.esm.js';

// service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(() => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}

let items, filter, mode, node;
const addItem = obj => {
  const clone = node.template.cloneNode(true);
  clone.querySelector('p').innerHTML = obj.value;
  if (obj.completed) {
    clone.querySelector('input').checked = true;
    clone.querySelector('.item').classList.add('completed');
  }
  addItemEventListeners(clone);
  node.items.appendChild(clone);
  node.add.input.value = '';
  filterItems();
  updateClear();
  updateTotal();
};
const addItemEventListeners = clone => {
  const item = clone.querySelector('.item');
  const checkbox = clone.querySelector('input');
  const close = clone.querySelector('button');
  checkbox.addEventListener('change', () => {
    item.classList.toggle('completed');
    filterItems();
    updateClear();
    updateItems();
    updateTotal();
  });
  close.addEventListener('click', () => {
    item.parentNode.removeChild(item);
    filterItems();
    updateClear();
    updateItems();
    updateTotal();
  });
};
const filterItems = (button = '') => {
  if (button !== '') updateFilter(button);
  node.filter.buttons.forEach(elem => elem.classList.remove('current'));
  node.filter[filter].classList.add('current');
  const items = node.items.querySelectorAll('.item');
  if (filter === 'all')
    [...items].forEach(elem => elem.classList.remove('hidden'));
  if (filter === 'active')
    [...items].forEach(elem =>
      elem.classList[elem.classList.contains('completed') ? 'add' : 'remove'](
        'hidden'
      )
    );
  if (filter === 'completed')
    [...items].forEach(elem =>
      elem.classList[elem.classList.contains('completed') ? 'remove' : 'add'](
        'hidden'
      )
    );
};
const getLocalStorageItems = () => {
  if (localStorage.getItem('filter') === null)
    localStorage.setItem('filter', 'all');
  if (localStorage.getItem('items') === null)
    localStorage.setItem('items', JSON.stringify([]));
  if (localStorage.getItem('mode') === null)
    localStorage.setItem('mode', 'light');
  filter = localStorage.getItem('filter');
  filterItems(filter);
  mode = localStorage.getItem('mode');
  node.html.classList[mode === 'light' ? 'remove' : 'add']('dark');
  items = JSON.parse(localStorage.getItem('items'));
  items.forEach(addItem);
};
const modeToggle = () => {
  mode = mode === 'light' ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
  node.html.classList.toggle('dark');
};
const removeCompleted = () => {
  [...node.items.querySelectorAll('.item.completed')].forEach(elem =>
    elem.parentNode.removeChild(elem)
  );
  updateClear();
  updateItems();
  updateTotal();
};
const updateClear = () => {
  const items = node.items.querySelectorAll('.item.completed');
  if (items.length === 0) node.clear.classList.add('hidden');
  if (items.length !== 0) node.clear.classList.remove('hidden');
};
const updateFilter = str => {
  filter = str;
  localStorage.setItem('filter', str);
};
const updateItems = () => {
  console.log('yup');
  items = [...node.items.querySelectorAll('.item')].map(elem => {
    return {
      value: elem.querySelector('p').innerHTML,
      completed: elem.classList.contains('completed'),
    };
  });
  localStorage.setItem('items', JSON.stringify(items));
};
const updateTotal = () => {
  const items = node.items.querySelectorAll(
    '.item:not(.total):not(.completed)'
  );
  node.total.text.innerHTML = `${items.length} item${
    items.length !== 1 ? 's' : ''
  } left`;
};
document.addEventListener('DOMContentLoaded', () => {
  // cache node query selectors
  node = {
    add: {
      form: document.querySelector('form'),
      input: document.querySelector('form input[type="text"]'),
    },
    clear: document.querySelector('.total button'),
    filter: {
      all: document.querySelector('.filter .all'),
      active: document.querySelector('.filter .active'),
      buttons: document.querySelectorAll('.filter button'),
      completed: document.querySelector('.filter .completed'),
    },
    html: document.querySelector('html'),
    items: document.querySelector('.items'),
    mode: document.querySelector('header .mode'),
    template: document.querySelector('template').content,
    total: {
      container: document.querySelector('.total'),
      text: document.querySelector('.total p'),
    },
  };
  getLocalStorageItems();

  node.add.form.addEventListener('submit', e => {
    e.preventDefault();
    if (node.add.input.value.replace(/\s/g, '') !== '') {
      items.push({ value: node.add.input.value, completed: false });
      localStorage.setItem('items', JSON.stringify(items));
      addItem({ value: node.add.input.value, completed: false });
    }
  });
  node.clear.addEventListener('click', removeCompleted);
  Sortable.create(node.items, {
    ghostClass: 'dragging',
    handle: '.handle',
    onUpdate: () => {
      updateItems();
    },
  });
  node.filter.all.addEventListener('click', () => filterItems('all'));
  node.filter.active.addEventListener('click', () => filterItems('active'));
  node.filter.completed.addEventListener('click', () =>
    filterItems('completed')
  );
  node.mode.addEventListener('click', modeToggle);
});
