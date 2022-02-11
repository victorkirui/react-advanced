import axios from 'axios'
import React, {useState,useEffect} from 'react'

function FetchPost() {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then(res => {
                setLoading(false)
                setError('')
                setPost(res.data)
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError(err)
            })
    },[])

  return (
    <div>
        {loading ? 'Loading' : post.title}
        {error ? 'Something went wrong' : null}
    </div>
  )
}

export default FetchPost
