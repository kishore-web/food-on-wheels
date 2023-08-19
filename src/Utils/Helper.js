
export function filterdata(input, allrestro){
  console.log(input,allrestro)
      const filterdataX = allrestro.filter((restro)=>
        restro?.info?.name?.toLowerCase()?.includes(input?.toLowerCase())
      )
      console.log(filterdataX)
      return filterdataX
}

