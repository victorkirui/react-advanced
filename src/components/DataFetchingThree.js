import axios from 'axios'
import React, {useReducer,useEffect} from 'react'

const initialState = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_FAILURE':
            return {
                loading: false,
                error: 'Something went wrong',
                post: {}
            }
        default: return state
    }
}

function DataFetchingThree() {

   const [currentState,dispatch] = useReducer(reducer,initialState)

   useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/poss/21')
         .then(res => {
             dispatch({ type: 'FETCH_SUCCESS', payload: res.data})
         })
         .catch(error => {
             dispatch({ type: 'FETCH_FAILURE'})
         })
   },[])

  return (
    <div>
        {currentState.loading ? 'loading' : currentState.post.title}
        {currentState.error ? 'something went wrong' : null}
    </div>
  )
}

export default DataFetchingThree