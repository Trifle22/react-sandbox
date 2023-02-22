import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components';
import { DragnDrop } from '../components/DragnDrop';

export const AppRouter = () => {

  return (
      <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/trash' element={<DragnDrop />} />
      </Routes>
  )
}