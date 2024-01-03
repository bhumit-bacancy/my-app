import React from 'react'
import { useParams } from 'react-router-dom'

export default function Book() {
  const { id } = useParams()
  return (
    <div className="container">
      <h1>Book {id}</h1>
    </div>
  )
}
