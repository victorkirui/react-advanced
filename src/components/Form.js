import React from 'react'
import useForm from '../hooks/useForm'

function Form() {

    const [fname,fnameReset,fnameBind] = useForm('')
    const [lname,lnameReset,lnameBind] = useForm('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello ${fname} ${lname}`)
        fnameReset('')
        lnameReset('')

    }

  return (
    <div>
        Form
        <form onSubmit={handleSubmit}>
            <div>
                <label>Fname</label>
                <input type="text" {...fnameBind} />
            </div>
            <div>
                <label>Lname</label>
                <input type="text" {...lnameBind} />
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form