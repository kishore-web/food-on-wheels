import React from 'react'
import { useParams } from 'react-router-dom'
import useCustomHook from '../Utils/useCustomHook'

const RestroPage = () => {
  const {resid} = useParams()
  const specificRestro = useCustomHook(Number(resid))
  console.log(resid)
  console.log(specificRestro)

  return (
    <div>
      <span>{specificRestro?.data?.cards[0]?.card?.card?.info?.name}</span>
      <span> {specificRestro?.data?.cards[0]?.card?.card?.info?.avgRating} </span>
    </div>
  )
}

export default RestroPage