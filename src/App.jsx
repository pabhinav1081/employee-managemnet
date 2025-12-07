import React, { use, useContext, useEffect } from 'react'
import Login from './component/auth/login.jsx'
import Employeedasshbord from './component/dashboardc/employeedasshbord.jsx'
import Admindashboard from './component/dashboardc/admindashboard.jsx'
import AllATask from './component/others/AllATask.jsx'
import { setupLocalstorage } from './utils/localstorage.jsx'
import { useState } from 'react'
import { AuthContext } from './context/Authprovider.jsx'

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
  const [user, setUser] = useState(null);
  const authdata =useContext(AuthContext);
  console.log(authdata.userData);
 
  
  const handellogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser('admin');
      //localStorage.setItem("adminloggedin",true);
    } else if (authdata.userData&&authdata.userData.employees.find((emp) => emp.email === email && emp.password === password)) {
      setUser('employee');
        //localStorage.setItem("employeeloggedin",true);
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