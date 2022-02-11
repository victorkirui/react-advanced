import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwoo() {

    const [count,increment, decrement, reset] = useCounter(5,5)

  return (
    <div>
        {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwoo