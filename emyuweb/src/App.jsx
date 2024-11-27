import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import React from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import MainTemplate from './MainTemplate';
import About from './pages/About';
import Blog from './pages/Blog';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainTemplate/>}>
      <Route index element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      
      </Route>  
       ));
  return <RouterProvider router={router}/>;
};

export default App
