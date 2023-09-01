import { useState } from "react"
import Todo from "./Todo"

function Userefexample3() {
    const[showtodo, setshowtodo] = useState(true)
  return (
    <div>
    {showtodo && <Todo />}


<button className="btn btn-primary" onClick={()=> setshowtodo(!showtodo)}>

toggle todo

</button>
 
    </div>
  )
}

export default Userefexample3
