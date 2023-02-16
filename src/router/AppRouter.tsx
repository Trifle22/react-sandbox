import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Trash } from '../components';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/trash' element={<Trash />} />
      </Routes>
    </div>
  )
}