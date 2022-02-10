import React,{ useState } from 'react'

function HooksCounter() {

  let initialCount = 0

  const [count,setCount] = useState(initialCount)


  const decrementFive = () => {
    for(let i=0; i<5 ; i++){
      setCount(prevCount => prevCount - 1)
    }
  }

  return (
    <div>
      Cout: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <button onClick={decrementFive}>Decrement Five</button>
    </div>
  )
}

export default HooksCounter