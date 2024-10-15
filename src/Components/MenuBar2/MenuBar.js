import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home/Home'

import Users from './Users/User'

import UserDetails from './Users/UserDetails'

import Header from './Header'

function MenuBar() {
  return (
    <div>
        <h1>Menubar using dynamcic routing</h1>
        <BrowserRouter>
        <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/user/details' element={<UserDetails />} /> {/* Define the route for UserDetails */}

        

    </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MenuBar