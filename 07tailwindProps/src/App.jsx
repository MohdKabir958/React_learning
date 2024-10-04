import { useState } from 'react'
import './App.css'
import Card from './componenets/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card  username="Chai or code " btnText="Click me"/>
      <Card  btnText="Visit me"/>
      

    </>
  )
}

export default App


