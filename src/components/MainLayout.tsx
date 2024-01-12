import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'



type ChildrenProps = {
  children: React.ReactNode
}
const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <main>
      <header className=' w-full bg-primary py-2 fixed z-[555]'>
        <Header/>
      </header>
      <section className='flex relative top-[70px] '>
        <aside className='sidebar w-[18%] overflow-y-hidden fixed px-3 h-full'><Sidebar/></aside>
        <aside className='main-content relative left-[20%] w-[80%]'>{children}</aside>
      </section>
    </main>
  )
}

export default MainLayout
