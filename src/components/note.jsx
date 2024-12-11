import React from 'react'

const note = (props) => {
  return (
    <div className="w-48 p-2 rounded-md bg-white shadow-md m-5">
      <h1 className="text-lg font-bold">{props.title}</h1>
      <p className="text-sm">{props.content}</p>
    </div>
  )
}

export default note
