import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add-user' element={<AddUser />}></Route>
        <Route path='/update-user/:id' element={<UpdateUser />}></Route>
    </Routes>
  )
}

export default AllRoutes
