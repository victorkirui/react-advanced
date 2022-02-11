import React,{useState} from 'react'
import useDocTitle from '../hooks/useDocTitle'

function DocTitleTwo() {
    const [count,setCount] = useState(0)

    useDocTitle(count)

  return (
    <div>
        {count}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>clicked - {count}</button>
    </div>
  )
}

export default DocTitleTwo