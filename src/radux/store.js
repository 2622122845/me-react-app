import { createStore } from 'redux'
import reducer from './reducer.js'
/*
dispatch
subscribe
getState
*/
let store = createStore(reducer)
console.log(store);
export default store;
