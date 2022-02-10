import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import {UserContext,NameContext} from '../App'

function ComponentB() {

    const user = useContext(UserContext)
    const name = useContext(NameContext)
  return (
    <div>
        {user} - {name}
    </div>
  )
}

export default ComponentB