/*

Routing is used to display content of a component without refreshing/shifting to new page

In routing the content is changed by component changing/shifting

Routing is again 2-types

i.static routing

ii.dynamic routing


In react lib we dont have routing option. so we are installing external lib react-router-dom

In this we use browserrouter component to have routes and route in it

Each routes can have various route 

In order to link out nav-items to route in routes , we use Link component

In browser router we need to specify header/nav-item component

Then we move to routes, in routes we have route component

In route we pass props like path(means to which url mapping), element we pass display content component

In link we use to(for url mapping ro route path)

Route can use as with closing and without closing, we use closing tag when we go through nested routing

At nested routing we use outlet component to display content in nested/child routes


*/


import React from 'react'

import {BrowserRouter,Route, Routes} from 'react-router-dom'

import Home from './HomeComponent/Home'

import About from './AboutComponent/About'

import Users from './UsersComponent/Users'

import Orders from './UsersComponent/Orders';

import Header from './Header'



function MenuBar() {
  return (
    <div>
        <h1>This is example of static routing with nested routing</h1>
        <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='users' element={<Users/>}>
                <Route path='orders' element={<Orders/>}/>
            </Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MenuBar