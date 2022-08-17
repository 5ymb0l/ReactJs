import React, { useEffect, useState } from "react";

function HooksCounterOne () {
 
     const [ count , setCount] = useState(0)
     const[ name, setName] = useState('')

     useEffect(() => {
     console.log('useEffect - Updating Document Title')
     document.title = `You clicked ${count} times `
}, [count])

 return (
 <div>
    <input type= "text" value={name} onChange = { e => setName (e.target.value)}></input>
    <button onClick={() => setCount(count + 1)} > Click {count} times </button>
 </div>

 )
}

export default HooksCounterOne