import { writable } from 'svelte/store';

const localStorageStore = (key, initialValue = []) => {
  let value;

  if (typeof localStorage !== 'undefined') {
    value = JSON.parse(
      localStorage.getItem(key) || JSON.stringify(initialValue),
    );
  } else {
    value = [];
  }

  const store = writable(value);

  if (typeof localStorage !== 'undefined') {
    store.subscribe(v => {
      localStorage.setItem(key, JSON.stringify(v));
    });
  }

  return store;
};

export default localStorageStore;
