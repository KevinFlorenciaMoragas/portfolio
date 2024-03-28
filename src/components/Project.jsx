import React from 'react'
import { useParams } from 'react-router-dom'
export default function project() {
  const {id} = useParams()
  console.log(id)
  return (
    <></>
  )
}
