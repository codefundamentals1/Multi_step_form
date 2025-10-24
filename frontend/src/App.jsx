import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentForm from './components/ParentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ParentForm></ParentForm>
    </>
  )
}

export default App
