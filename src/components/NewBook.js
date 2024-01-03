import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function NewBook() {
  const obj = useOutletContext()
  return (
    <div className="container">
      <h1>NewBook {obj.hello}</h1>
    </div>
  )
}
