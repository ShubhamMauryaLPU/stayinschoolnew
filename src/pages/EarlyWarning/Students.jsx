import React from 'react'
import studentList from '../../data/studentList';
import StudentCol from '../../components/StudentCol';
import Button from "../../components/Button"
import { Link } from 'react-router-dom';
const Students = () => {
  return (
    <div className='w-full bg-gradient-to-b from-orange-100 to-orange-300 flex flex-col justify-center items-center py-5'>
        <h1 className='text-2xl lg:text-3xl font-bold font-serif pb-5'>Student List</h1>
        <div className='grid md:grid-cols-2 mb-6 lg:grid-cols-3 gap-x-4'>
            <Link to={"/mark/attendence"}>
            <Button name={"Mark Student Attendence"} className=' bg-yellow-300 hover:bg-yellow-600 active:bg-yellow-600'/>
            </Link>
            <Button name={"Upgrade GPA"} className=' bg-yellow-300 hover:bg-yellow-600 active:bg-yellow-600'/>
            <Button name={"Update Behavior"} className=' bg-yellow-300 hover:bg-yellow-600 active:bg-yellow-600'/>
        </div>
        <table className='w-full text-center rounded-2xl '>
            <thead>
                <tr className='bg-orange-400'> 
                    <th className="border-1 py-1">Sr. No.</th>
                    <th className="border-1 py-1">Name</th>
                    <th className="border-1 py-1">Mobile No.</th>
                    <th className="border-1 py-1">Class</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentList.map((item)=>(
                        <StudentCol studentList={item} />
                    ))
                }
            </tbody>
        </table>
       
    </div>
  )
}

export default Students