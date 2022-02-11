import React from 'react'
import useCounter from '../hooks/useCounter'

function CouterOne() {

    const [count,increment, decrement, reset] = useCounter(0,10)

  return (
    <div>
        {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CouterOne