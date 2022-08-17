import React, { useState , useEffect } from 'react'

function IntervalHookCounter() {
    
  // Using Empty dependency array
  //   const [count, setCount] = useState(0)

  //   const tick = () => {
  //       setCount(count + 1)
  //   }
  //   useEffect(() => {
  //       const interval = setInterval(tick , 1000)    
  //       return () => {
  //           clearInterval(interval)
  //  }
  //       // eslint-disable-next-line
  //   }, [count]);  

   // Using PreviousCount
        const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
      // function doSomething() {
      //   console.log(someProp)
      // }
        const interval = setInterval(tick , 1000)    
        return () => {
            clearInterval(interval)
   }
        // eslint-disable-next-line
    }, []); 
    
  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter