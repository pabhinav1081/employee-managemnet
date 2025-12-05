import React, { useEffect } from 'react'
import Login from './component/auth/login.jsx'
import Employeedasshbord from './component/dashboardc/employeedasshbord.jsx'
import Admindashboard from './component/dashboardc/admindashboard.jsx'
import AllATask from './component/others/AllATask.jsx'
import { setupLocalstorage } from './utils/localstorage.jsx'
import { useState } from 'react'

const App = () => {
  useEffect(() => {
    // initialize local storage (runs once)
    try {
      setupLocalstorage()
    } catch (e) {
      // ignore if setupLocalstorage is not present or errors
      console.error('setupLocalstorage failed', e)
    }
  }, [])
  const [user, setuser] = useState(null);
  
  const handellogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setuser("admin");
    } else if (email === "user@me.com" && password === "123") {
      setuser("employee");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handellogin={handellogin}/>:''}
      {user=='admin' ? <Admindashboard /> :<Employeedasshbord />}
    
    </>
  )
}

export default App