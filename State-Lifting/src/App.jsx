import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState("")

  return (
    <>
      <div>
        {/* <Card name="Yashvi" /> */}
        <Card name={name} setName={setName} />
        <p>I am inside of parent component and I'm: {name} </p>

      </div>
    </>
  )
}

export default App
