import React from 'react'

function TitleComp() {
    console.log(`rendering Title component`)
  return (
    <div>Title Component</div>
  )
}

export default React.memo(TitleComp)