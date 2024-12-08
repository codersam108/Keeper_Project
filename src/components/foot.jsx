import React from 'react'

const foot = () => {
  function getCurrentYear()
    {
        const d=new Date();
        return d.getFullYear();
    }
  return (
  <footer className='text-center text-neutral-300'>
      Copyright &copy; {getCurrentYear()}
    </footer>
  )
}

export default foot
