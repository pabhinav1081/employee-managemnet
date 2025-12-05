import React from 'react';
import Header from '../others/header.jsx';
import Tasklist from '../others/tasklist.jsx';
import Tasklistm from '../tasklist/Tasklistm.jsx';

const Employeedasshbord = () => {
  return (
    <div className='p-10 bg-gray-800 h-screen'>
        <Header />
        < Tasklist />
        < Tasklistm />
        </div>
  )
}

export default Employeedasshbord