import { useState,useRef,useEffect,useMemo } from "react"

function Usememoexample() {
    const[number,setnumber] = useState(0)
    const[inc,setinc] = useState(0)
    const renders = useRef(1)
    //const sqrt = getsqrt(number)

    const sqrt = useMemo(()=> getsqrt(number), [number]
    )

    useEffect(()=> {
        renders.current = renders.current + 1

    }
    )


    const onclick = () => {
        setinc((prevstate)=>{
            console.log(prevstate + 1)
            return prevstate + 1
        })
    }

  return (
    <div>

    <input type="number" value={number} onChange={(e)=> setnumber(e.target.value)}  className="form-control w-25" />   
    <h3>renders: {renders.current}</h3>


<h2 className="my-3">
    the sqrt of {number} is {sqrt}
</h2>

    <button  className="btn btn-primary"  onClick={onclick}  > 
Re Renders
    </button>
    </div>
  )
}



function getsqrt(n){
for(let i =0; i <= 1000; i++){
    console.log(i)
}


    console.log("expensive func called")
    return Math.sqrt(n)
}


export default Usememoexample
