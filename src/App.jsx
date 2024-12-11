import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/heading'
import Foot from './components/foot'
import Note from './components/note'
import notes from './notes'
function createKeeper(not)
{
   return(
    <Note key={not.key}
    title={not.title}
    content={not.content}/>
   );
}
console.log(notes);

function App() {


  return (
    <>
      <Heading />
      <div className='w-full h-auto flex mb-96'>
       {notes.map(createKeeper)}
       </div>
      <Foot />
    </>
  )
}

export default App
