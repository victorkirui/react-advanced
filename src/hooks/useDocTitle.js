import React,{useEffect} from 'react'

function useDocTitle(count) {
    useEffect(() => {
        document.title = `clicked ${count}`
    },[count])
}

export default useDocTitle