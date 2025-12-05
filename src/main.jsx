import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authentication from './context/authentication.jsx'
import Taskcontext from './context/Taskcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Authentication>
      <Taskcontext>
         <App /> 
         </Taskcontext>

    </Authentication>
  </StrictMode>,
)
