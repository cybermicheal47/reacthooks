import useFetch from "../hooks/useFetch"

function Customhookexample() {
const {data,loading} = useFetch('https://jsonplaceholder.typicode.com/posts', {})

if(loading){
    return <h3>
        lOADING...
    </h3>

}

else
  return (
    <div>
 {data.map((post)=>(
<h3 key={post.id}>   {post.title}</h3>
 ))}
    </div>
  )
}

export default Customhookexample
