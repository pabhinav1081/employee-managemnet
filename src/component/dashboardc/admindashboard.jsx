import React from 'react'
import Header from '../others/header.jsx';
import AllATask from '../others/AllATask.jsx';

const Admindashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
        <div className='flex items-center  justify-center'>
            <form className='bg-gray-700 p-20 rounded-lg mt-10 max-w-md flex flex-start justify-center flex-col'>
                <h3> Task Title</h3>
                <input type="text" placeholder='Enter task title' className='border-2 border-gray-600 rounded-md p-2 w-full
                bg-gray-700 mb-4 '/>
                <h3> Description</h3>
                <textarea placeholder='Enter task description' className='border-2 border-gray-600 rounded-md p-2 w-full
                bg-gray-700 mb-4 '/>
                <h3> Due Date</h3>
                <input type="date" className='border-2 border-gray-600 rounded-md p-2 w-full
                bg-gray-700 mb-4 '/>
                <h3> Assign</h3>
                <select className='border-2 border-gray-600 rounded-md p-2 w-full
                bg-gray-700 mb-4 '>
                    <option value="">Select Employee</option>
                    <option value="emp1">Abhinav</option>
                    <option value="emp2">Raj</option>  

                </select>
                <button type='submit' className='bg-green-600 text-white p-2 rounded-md mt-4 '>Create Task</button> 
            </form>
        </div>
        <AllATask />
    </div>

  )
}

export default Admindashboard