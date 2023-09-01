import { useState,useEffect,useRef } from "react"

function Userefexample2() {
const[name, setname] = useState('')
const renders = useRef(1)
const prevname = useRef('')
useEffect(()=> {
renders.current = renders.current + 1
prevname.current = name
},[name])

  return (
    <div>
   <h2> Render: {renders.current}</h2>
   <h2>Previous state {prevname.current}</h2>
<input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control mb-3" />s


    </div>
  )
}

export default Userefexample2
