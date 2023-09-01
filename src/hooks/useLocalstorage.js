import { useState } from "react";

function getsavedvalue(key, intialvalue) {
    const  savedvalue = JSON.parse(localStorage.getItem(key))
    if (savedvalue) return savedvalue
    else
    return  intialvalue
} 


function useLocalstorage(key,intialvalue) {
const [value, setvalue] = useState(intialvalue)


  return  [value, setvalue]
}

export default useLocalstorage
