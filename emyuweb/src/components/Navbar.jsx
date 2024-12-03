import React from 'react'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import ProfilePic from './../assets/profile.jpg'


const Navbar = () => {


  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="max-w-screen py-3 px-3 flex flex-wrap items-center justify-between mx-auto">

        {/* the left buttons*/}
        <div className="flex items-center space-x-3">
          <NavLink to="/" onClick={() => isMenuOpen(false)} className=' text-xl text-center font-thin'>
            EmyuMath
          </NavLink>
        </div>

        <button onClick={toggleMenu} className ="block md:hidden font-thin">
        <SlMenu/>
        </button>

      {/* the right buttons*/}
        <div className="hidden md:flex space-x-4">
        <NavLink className="hover:underline  text-center" to="/blog">
            Blog
          </NavLink>
          <NavLink className="hover:underline  text-center" to="/content">
            Content
          </NavLink>
          <NavLink className="hover:underline  text-center" to="/about">
            About
          </NavLink>
        </div>
      </div>



      {isMenuOpen && (
        <div className="md:hidden flex flex-col border-b-2 border-black">
          <NavLink className="hover:underline font-thin px-2 py-2 content-center text-center" onClick={toggleMenu} to="/blog">
            Blog
          </NavLink>
          <NavLink className="hover:underline font-thin px-2 py-2 content-center text-center" onClick={toggleMenu} to="/content">
            Content
          </NavLink>
          <NavLink className="hover:underline font-thin px-2 pt-2 pb-5 content-center text-center" onClick={toggleMenu} to="/about">
            About
          </NavLink>

        </div>
      )}
    </nav>
  )
}

export default Navbar