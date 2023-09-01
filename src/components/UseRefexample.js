import { useRef } from "react"

export default function UseRefexample() {
    const inputref =useRef()
    const pararef = useRef()



    const onsubmit = (e) => {
        e.preventDefault()
        console.log(inputref.current.value)
        inputref.current.value = 'hello'
        pararef.current.innerText = "goodbye"
        }    
  return (
    <div>



     
<form onSubmit={onsubmit}>

<input type='text' ref={inputref} id='name' className='form-control' mb-2/>
<button type='submit' className='btn btn-primary'>
    Submit

</button>

<p ref={pararef} onClick={()=>inputref.current.focus()} > elllo</p>


</form>









    </div>
  )
}
