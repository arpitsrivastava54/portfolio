import Image from 'next/image'
import React from 'react'
import blogImg from "../assets/blog-img.jpg"
import ecommerceImg from "../assets/ecommerce.jpg"
import googleImg from "../assets/google.jpg"


const projectData = [
  {
    image: blogImg,
    title: "Blog Website",
    description: "React.js , Redux Toolkit, Tailwind Css, MongoDB, Express.js"
  },
  {
    image: ecommerceImg,
    title: "E-commerce Clone",
    description: "React.js , Redux Toolkit, Tailwind Css, MongoDB, Express.js"
  },
  {
    image: googleImg,
    title: "Google Search Clone",
    description: "React.js , Redux Toolkit, Tailwind Css, MongoDB, Express.js"
  },
  {
    image: googleImg,
    title: "University Website",
    description: "React.js , Redux Toolkit, Tailwind Css, MongoDB, Express.js"
  },
]



const Projects = () => {
  return (
    <main className='w-full my-5'>
      <h2 className='my-5 text-zinc-200 text-2xl'>Projects</h2>
      <div className='w-full flex flex-wrap justify-evenly'>
        {
          projectData.map((item) => (
            <div key={item.title} className='main-container overflow-hidden w-[22%] relative cursor-pointer h-[270px] rounded-2xl hover:shadow-zinc-500 hover:shadow-lg duration-300 hover:scale-105'>
              <div className="image-box h-1/2">
                <Image src={item.image} className='rounded-t-2xl w-full h-full object-cover' alt='' />
              </div>
              <div className="content-box h-1/2 bg-zinc-100 p-3 rounded-b-2xl text-[#0e0e2e]">
                <h2 className='text-lg font-semibold'>{item.title}</h2>
                <p className='text-sm text-zinc-900 font-semibold mt-2'>{item.description}</p>
              </div>
              <div className='show-overlay w-full flex flex-col gap-5 justify-center items-center absolute bottom-0 bg-[black] rounded-2xl'>
                <a href='#' className='text-white font-bold hover:bg-white hover:text-black rounded-3xl px-5 py-2 border'>Visit Site</a>
                <a href='#' className='text-white font-bold rounded-3xl px-5 py-2 border  hover:bg-white hover:text-black'>Visit Source Code</a>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Projects
