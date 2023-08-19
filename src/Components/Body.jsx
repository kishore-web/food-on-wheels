import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { SWIGGY_API } from '../constant/conflict'
import RestroCard from './RestroCard'
import './Body.css'
import { filterdata } from '../Utils/Helper'
const Body = () => {
  const [input, setInput] = useState("")

   function handleChange(e){
      setInput(e.target.value)
      console.log(input)
    }
  
  let restro;
  const [allrestro, setAllrestro] = useState([])
  const [filteredrestro, setFilteredrestro] = useState([])

    const fetchData = async()=>{
      const response = await fetch(SWIGGY_API)
      const data = await response.json()
      restro = data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      if(restro?.length!==0){
        setAllrestro(restro)
        setFilteredrestro(restro)
        console.log(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(allrestro)
      }
      // console.log(allrestro)
    }
  useEffect(()=>{
    fetchData()
  },[])
  return (

    <div>
      <div>
        <input type="text"  value={input} onChange={handleChange} />
        <button onClick={()=>{
          const result = filterdata(input,allrestro)
          setInput('')
          setFilteredrestro(result)
        }}>Search</button>
      </div>
      <div className='container'>
           {
        filteredrestro?.length===0 ? (<h1>restro not found</h1>) : (
          filteredrestro.map((item)=>{
            return (
              <RestroCard key={item.info.id} restrodetail = {item} />
            )
          })
        )
      }
      </div>
   
    </div>
  )
}

export default Body