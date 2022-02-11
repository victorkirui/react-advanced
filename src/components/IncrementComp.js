import React from 'react'

function IncrementComp({text,val}) {
  console.log(`Rendering ${text}`)
  return (
    <div>
      {text} - {val}
    </div>
  )
}

export default React.memo(IncrementComp)