import React from 'react'
import { UserContext,NameContext } from '../App'

function ComponentC() {
  return (
    <UserContext.Consumer>
        {
            user => {
                return (
                    <NameContext.Consumer>
                        {
                            name => {
                                return <div>Hello {user} {name}</div>
                            }
                        }
                    </NameContext.Consumer>
                )
            }
        }
    </UserContext.Consumer>
  )
}

export default ComponentC