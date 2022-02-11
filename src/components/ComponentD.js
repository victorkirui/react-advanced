import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentD() {

  const countContext = useContext(CountContext)
  return (
    <div>
      ComponentD - {countContext.contextCount}
      <button onClick={() => countContext.contextDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.contextDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.contextDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentD