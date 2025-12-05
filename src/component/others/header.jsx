import React from 'react'

export const Header = () => {
  return (
    <div className='flex items-end justify-between p-4 border-b-2 border-gray-600'>
        <h1 className='text-2xl '> Hello! <br /> Abhinav </h1>
        <button className='bg-red-500 text-lg rounded-sm px-4 py-3 '>Logout</button>
    </div>
  )
}
export default Header