import React from 'react'

import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/user'>Users</Link></li>

        </ul>
    </div>
  )
}

export default Header