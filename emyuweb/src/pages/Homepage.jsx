import React from 'react'
import ProfilePic from './../assets/profile.jpg'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="flex-grow flex flex-col justify-start ">
        <>
            <div class="flex flex-col items-center">
                <div className="size-6/12 max-w-72 px-7">
                    <img className=" justify-center rounded-full p-8 " src={ProfilePic}/>
                </div>
                <div className="text-center text-xl font-bold">
                Hello! 
                </div>
                    <p className="text-center ">
                    The website still under construction! Thank you for your patience!
                    </p>
                    <NavLink to="/blog" >
                      <button className="hover:underline">
                      Blog
                      </button>
                    </NavLink>
            </div>
           
        </>



    </div>
  )
}

export default Homepage