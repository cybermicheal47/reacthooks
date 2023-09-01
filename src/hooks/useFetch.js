import { useEffect,useState } from "react"

function useFetch(url,options) {
  const[loading, setloading] = useState(true)
  const[error, seterror] = useState(null)
  const[data, setdata] = useState(null)



useEffect(()=>{
const fetchdata = async () =>{
    try {
       const response = await fetch(url, options)
       const data = await response.json()
       setdata(data) 
       setloading(false)
    } catch (error) {
        seterror(error)
        setloading(false)
    }
}


fetchdata()
},[])


return {loading, error, data}


}

export default useFetch
