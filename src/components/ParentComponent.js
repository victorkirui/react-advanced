import React,{useState,useCallback} from 'react'
import TitleComp from './TitleComp'
import IncrementComp from './IncrementComp'
import ButtonComp from './ButtonComp'

function ParentComponent() {

    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 5000)
    },[salary])

  return (
    <div>
        <TitleComp />
        <IncrementComp text="age" val={age}/>
        <ButtonComp handleClick = {incrementAge}>Increment Age</ButtonComp>
        <IncrementComp text="salary" val={salary}/>
        <ButtonComp handleClick = {incrementSalary}>Increment Salary</ButtonComp>
    </div>
  )
}

export default ParentComponent