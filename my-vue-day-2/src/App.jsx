import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Todolist from './components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     day-2
     <Todolist />
    </div>
  )
}

export default App
