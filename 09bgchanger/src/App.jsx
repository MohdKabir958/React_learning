import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="main" style={{ backgroundColor: color }}>
        <h1>BG Changer Project</h1>
        <div className="btn_container">
          <div className="btn_style"
            onClick={() => setColor("red")}>
            <button>Red</button>
          </div>
          <div className="btn_style"
            onClick={() => setColor("blue")}>
            <button>Blue</button>
          </div>
          <div className="btn_style"
            onClick={() => setColor("green")}>
            <button>Green</button>
          </div>
          <div className="btn_style"
            onClick={() => setColor("yellow")}>
            <button>Yellow</button>
          </div>
          <div className="btn_style"
            onClick={() => setColor("pink")}>
            <button>Pink</button>
          </div>
          <div className="btn_style"
            onClick={() => setColor("Lavender")}>
            <button>lavender</button>
          </div>
          <div className="btn_style"
            onClick={() => setColor("purple")}>
            <button>Purple</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App