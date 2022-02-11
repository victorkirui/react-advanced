import React,{useState,useEffect,useRef} from 'react'

function HookTimerTwo() {

    const [timer,setTimer] = useState(0)
    const intervalRef = useRef()
    
    useEffect(() => {
        intervalRef.current = setInterval(()=>{
            setTimer(prevtimer => prevtimer + 1)
        },1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    },[])


  return (
    <div>
         {timer}
          <button onClick={()=>clearInterval(intervalRef.current)}>Clear interval</button>
    </div>
  )
}

export default HookTimerTwo