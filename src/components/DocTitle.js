import React,{useState, useEffect} from 'react'
import useDocTitle from '../hooks/useDocTitle'

function DocTitle() {
    const [count,setCount] = useState(0)

    useDocTitle(count)

  return (
    <div>
        {count}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>clicked - {count}</button>
    </div>
  )
}

export default DocTitle