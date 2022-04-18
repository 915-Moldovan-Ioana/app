import './App.css';
import React, { useState } from 'react'
import {Button} from 'reactstrap'

function App(props) {
  const [ state, setState ] = useState('');

  return (
    <div className="App">
      <input value={state} onChange={(event) => setState(event.target.value)} type='text'/>
      <Button onClick = {() => setState('')}/>
      <label>
        {state}
      </label>
    </div>
  );
}

export default App;