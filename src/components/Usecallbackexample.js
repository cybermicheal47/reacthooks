import React from 'react'
import { useState, useCallback } from 'react'

function Usecallbackexample() {
const [tasks, settask] = useState([])
const addtask = useCallback(() => {
    settask((prevstate)=>[
 ...prevstate ,  'some task'
    ]

    )
},[settask]
)  

  return (
    <div>
<Button addtask={addtask} />
{tasks.map((task,index)=>(
    <p key={index}>
        {task}
    </p>
))}
    </div>
  )
}

const Button  = React.memo(({addtask}) =>{
    console.log("button re rendered")
    return <div>
        <button className='btn btn-secondary' onClick={addtask}>AddTask</button>
    </div>
})

export default Usecallbackexample
