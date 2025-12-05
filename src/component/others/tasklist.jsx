import React from 'react'

export const Tasklist = () => {
  return (
    <div className='flex mt-10 justify-between gap-3 '>
        <div className='px-5 text-white-100 py-20 w-[45%] bg-red-300  rounded-xl'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-lg '>New Task</h3></div>
        <div className='px-5 py-20 w-[45%] bg-blue-300  rounded-xl'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-lg '>New Task</h3></div>
        <div className='px-5 py-20 w-[45%] bg-green-300  rounded-xl'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-lg '>New Task</h3></div>
        <div className='px-5 py-20 w-[45%] bg-yellow-300  rounded-xl'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-lg '>New Task</h3></div>

    </div>
       
  )
}
export default Tasklist 