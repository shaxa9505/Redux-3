import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import { reducer } from './Redux/reducer';
import {inc, dec, random} from "./Redux/actions"




const store = createStore(reducer);
const {dispatch, subscribe, getState } = store 

subscribe(() => document.getElementById("counter").textContent = getState().value)

document.getElementById("increment").addEventListener("click", () => {
    dispatch(inc())
})

document.getElementById("decrement").addEventListener("click", () => {
    dispatch(dec())
})

document.getElementById("random").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
    dispatch(random(value))
})






ReactDOM.render(
  <React.StrictMode>
    <> 
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


