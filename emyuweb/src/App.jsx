import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import MainTemplate from './MainTemplate';
import About from './pages/About';
import Blog from './pages/Blog';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
  <Router>
    <Routes>
    <Route path='/' element={<MainTemplate/>}>
    <Route index element={<Homepage/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='blog' element={<Blog/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
    </Route>
    </Routes> 
  </Router>
   );
};

export default App
