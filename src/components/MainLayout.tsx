import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Toaster } from 'react-hot-toast'



type ChildrenProps = {
  children: React.ReactNode
}
const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <main>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <header className=' w-full bg-primary py-2 fixed z-[555]'>
        <Header />
      </header>
      <section className='flex relative top-[70px] '>
        <aside className='sidebar hidden lg:block w-[18%] overflow-y-hidden fixed px-3 h-full'><Sidebar /></aside>
        <aside className='main-content relative left-0 lg:left-[20%] w-full p-5 lg:p-0 lg:w-[80%]'>{children}</aside>
      </section>
    </main>
  )
}

export default MainLayout
