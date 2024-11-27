import React from 'react'
import { Outlet, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footnote from './components/Footnote';


const MainTemplate = () => {

  const location = useLocation();

  const isHomeTemplate = location.pathname === '/';

  return (
    <div className='flex flex-col min-h-screen bg-zinc-900'>
    { !isHomeTemplate && <Navbar/> } 
      <Outlet/>
   { !isHomeTemplate &&  <Footnote/> }
  </div>
  )
}

export default MainTemplate