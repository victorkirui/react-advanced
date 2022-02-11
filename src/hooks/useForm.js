import {useState} from 'react'

function useForm(initialValue) {
    const [value,setValue] = useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }

    }
  return [value,reset,bind]
}

export default useForm