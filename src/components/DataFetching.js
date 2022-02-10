import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromBtnClk,setIdFromBtnClk] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            }).catch(err => {
                console.log(err)
            })
    },[idFromBtnClk])

    const handleClick = () => {
        setIdFromBtnClk(id)
    }

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetching