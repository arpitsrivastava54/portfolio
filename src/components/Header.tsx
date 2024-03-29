"use client"
import React, { useState } from 'react'
import ContactModal from './ContactModal'

type Props = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({ setShowSidebar }: Props) => {
  const [showContact, setShowContact] = useState(false)
  function openNavbar() {
    window.scroll(0,0)
    setShowSidebar(true)
  }
  return (
    <>
      <nav className='flex w-full justify-between h-full'>
        <div onClick={openNavbar } className="left cursor-pointer lg:hidden w-[20%] flex ml-5 items-center gap-2">
          <div className='h-4 w-4 bg-green-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-4 w-4 bg-green-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        </div>
        <div className="left hidden w-[20%] lg:flex ml-5 items-center gap-2">
          <div className='h-4 w-4 bg-green-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-4 w-4 bg-green-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        </div>
        <div className="right w-[45%] lg:w-[20%] flex justify-end me-10 items-center">
          <div className="relative inline-flex group">
            <div
              className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="#" title="Contact for hiring or collabration"
              onClick={() => setShowContact(true)}
              className="relative inline-flex items-center justify-center px-6 py-3 text-sm lg:text-lg font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button">Contact Me
            </a>
          </div>
        </div>
      </nav>
      <ContactModal showContact={showContact} setShowContact={setShowContact} />
    </>

  )
}

export default Header
