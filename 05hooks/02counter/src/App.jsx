import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [counter, setCounter] = useState(15)


  // let counter = 15

  let addbtn = document.querySelector('#addbtn');
  let flash = document.querySelector('.flash')
  let rmbtn = document.querySelector('#rmbtn')



  const addvalue = () => {
    // console.log(counter = counter+1,counter)
    if (counter === 20) {
      addbtn.disabled = true;
      flash.style.color = 'red';
      flash.innerHTML = '<h2> Value cannot cross 20</h2>';
    }
    else {
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter === 0) {
      rmbtn.disabled = true;
      let flash = document.querySelector('.flash')
      flash.innerHTML = '<h2> Value cannot cross 0</h2>';
      flash.style.color = 'red';
    }
    else {
      setCounter(counter - 1)
    }
  }

  const resetValue = () => {
    addbtn.disabled = false;
    rmbtn.disabled = false;
    flash.innerHTML = " ";
  }

  return (
    <>
      <h1>A counter project to learn React Hooks . </h1>
      <h1>Chai or React</h1>
      <h2>Counter value : {counter}</h2>
      <button id="addbtn"
        onClick={addvalue}>Add Value {counter}</button> <br />
      <br />
      <button id="rmbtn"
        onClick={removeValue}>Remove Value</button>
      <p>{counter}</p>
      <div className="flash"></div>

      <button
        onClick={resetValue}>RESET</button>
    </>
  )
}

export default App
