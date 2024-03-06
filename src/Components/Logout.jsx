import React from 'react'

import { Link } from 'react-router-dom'

export default function Logout() {
  return (
    <>
    <div className='App'>
    <h4 style={{color:"Highlight"}}>Logged out</h4>
    <button className='btn btn-info'><Link Link to="/login" >Login</Link></button>
    </div>

    
    </>
  )
}
