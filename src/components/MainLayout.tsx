"use client"
import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Toaster } from 'react-hot-toast'
import ResponsiveSidebar from './ResponsiveSidebar'



type ChildrenProps = {
  children: React.ReactNode
}
const MainLayout = ({ children }: ChildrenProps) => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <main className=''>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <header className=' w-full bg-primary py-2 fixed z-[555]'>
        <Header setShowSidebar={setShowSidebar} />
      </header>
      <section className='flex relative top-[70px] '>
        <aside className='sidebar hidden lg:block w-[18%] overflow-y-hidden fixed px-3 h-full'><Sidebar /></aside>
        <aside className='main-content relative left-0 lg:left-[20%] w-full p-5 lg:p-0 lg:w-[80%]'>{children}</aside>
      </section>

      {showSidebar &&
        <section onClick={() => setShowSidebar(false)} className='fixed top-0 z-[999] w-[70%] h-screen'>
          <ResponsiveSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </section>
      }
    </main>
  )
}

export default MainLayout
