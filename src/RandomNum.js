import { useState } from "react"

const RandomNum=()=>{
  const [value,setvalue]=useState(0)
  const randomnumer=()=>{
    
    setvalue(Math.floor(Math.random()*10))
  }
  return(<div>
    <h1>{value}</h1>
    <button onClick={randomnumer}>Change</button>
  </div>)
}

export default RandomNum