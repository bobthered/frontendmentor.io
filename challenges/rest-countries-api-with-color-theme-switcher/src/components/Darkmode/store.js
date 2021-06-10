import { writable } from 'svelte/store';

const createStore = () =>{
  const { subscribe, update } = writable(false);

  return { 
    subscribe,
    toggle: () => update(state=>!state)
   }
}

export default createStore()