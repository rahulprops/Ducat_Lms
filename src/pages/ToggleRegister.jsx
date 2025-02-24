import React, { useState } from 'react'
import FacultyRegister from '../components/FacultyRegister'
import StudentRegister from '../components/StudentRegister'

const ToggleRegister = () => {

  const [toggle , setToggle]=useState(false)
    const facultyToggle= ()=>{
     setToggle(false)
    }
    const studentToggle= ()=>{
      setToggle(true)
    }
  return (
    <div className=' bg-slate-900'>
    <button onClick={facultyToggle} disabled={!toggle} className=' btn btn-outline btn-secondary m-4'>faculty</button>
    <button onClick={studentToggle} disabled={toggle} className=' btn btn-outline btn-secondary'>studnet</button>
      {/* <FacultyRegister/>
      <StudentRegister/> */}
      {
        !toggle ? <FacultyRegister/> : <StudentRegister/>
      }
    </div>
  )
}

export default ToggleRegister