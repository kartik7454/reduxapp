import React from 'react';

import {useSelector, useDispatch} from 'react-redux'; 

import { incNumber, decNumber} from "./actions/index";
import './App.css';





function App() {
  const myState = useSelector((state) =>state.changeTheNumber )
  const dispatch = useDispatch();
  return (
    <div class="container">
<h1>Increment/Decrement counter</h1>
<h4>using React and Redux</h4>
<div class="quantity">
<a class="quantity_minus" title="Decrement" onClick={()=> dispatch(decNumber())}><span>-</span></a>
<input name="quantity" type="text" className="quantity_input" value={myState}  />
<a class="quantity_plus" title="Increment" onClick={()=> dispatch(incNumber())}><span>+</span></a>
</div>
</div>
  );
}

export default App;
