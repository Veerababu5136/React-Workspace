import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {

  

  const buttonStyle = {
    backgroundColor: '#4CAF50', // Green background
    border: 'none',             // Remove border
    color: 'white',             // White text
    padding: '0',       // Padding
    textAlign: 'center',        // Center text
    textDecoration: 'none',     // Remove underline
    display: 'inline-block',    // Inline-block element
    fontSize: '16px',           // Font size
    margin: '4px 2px',          // Margin
    cursor: 'pointer',          // Pointer cursor on hover
    borderRadius: '4px',    
    width:'auto'     // Rounded corners
  };


  return (
    <div>
<Link to='orders'><button style={buttonStyle}>Orders</button></Link>        
<Outlet></Outlet>
    </div>
  )
}

export default Users