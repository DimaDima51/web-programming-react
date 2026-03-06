import { useState } from 'react'
import './App.css'
import NewComponent from './NewComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> Lorem ipsum dolor sit amet.</div>
      <div> Lorem ipsum dolor sit amet.</div>
      <NewComponent name = {123} count = {"dsadsadsa"}/>
    </>
  )
}

export default App
