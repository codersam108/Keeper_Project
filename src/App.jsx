import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/heading'
import Foot from './components/foot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading />
   <div className='h-96 mb-80'>
   <div className='w-48 p-2 rounded-md bg-white shadow-md m-5'><h1>This is the note title</h1>
   <p>This is the note content</p></div>
   </div>
   
   <Foot />
    </>
  )
}

export default App
