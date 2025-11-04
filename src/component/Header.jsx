import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className='bg-indigo-950 pb-10 flex justify-between items-center text-white'>
        <div>
          <img src="/public/img/Portfoliologo.png" alt="###"  className='w-20'/>
        </div>
        <div className='space-x-10 text-lg'>
          <Link to={"/"} className='active:bg-white/20 p-1.5 border-white active:border-b-2'>Home</Link>
          <Link to={"/projects"} >Projects</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/contact"}>Contect Us</Link>
        </div>
      </div>
    </div>
  )
}
