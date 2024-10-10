import React, { useState } from 'react';
import { AppProvider } from './Contexts/AppContext';
import CardList from './Components/CardList';
import logo from '../src/img/logo.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostDetails from './Components/Details';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className='app py-5 '>
          <img className=' w-36 h-14 mx-2 my-2' src={logo} alt='' />
          <Routes>
            <Route path='/' element={<CardList />} />
            <Route path='/post/:id' element={<PostDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
