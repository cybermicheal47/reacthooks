import useLocalstorage from "../hooks/useLocalstorage"

function Customhookexample2() {
    const[task, settask ] = useLocalstorage('task', '')
  return (
  <form className="w-50"
  >
    <div className="mb-3">
    <label
 className="form-label"> Task</label>
    <input
    type="text"
    value={task}
    onChange={(e)=> settask(e.target.value)}
    
    
    />
    </div>
  </form>
  )
}

export default Customhookexample2
