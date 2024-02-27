import React from 'react'

import { Link } from 'react-router-dom'

export default function Logout() {
  return (
    <>
    <div className='App'>
    <h2 style={{color:"Highlight"}}>Successfully Logout</h2>
    <button className='btn btn-info'><Link Link to="/login" >Login</Link></button>
    </div>

    
    </>
  )
}
