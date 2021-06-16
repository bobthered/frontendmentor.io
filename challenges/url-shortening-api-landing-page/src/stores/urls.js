import { writable } from 'svelte/store';

let storedUrls;

if ( typeof localStorage !== 'undefined') {
  storedUrls = JSON.parse(localStorage.getItem('urls') || '[]');
} else {
  storedUrls = [];
}

const urls = writable(storedUrls);

export default urls;

if ( typeof localStorage !== 'undefined') {
  urls.subscribe(value=> {
    localStorage.setItem('urls', JSON.stringify(value))
  })
}