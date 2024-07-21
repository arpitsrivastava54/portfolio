import Image from 'next/image'
import React from 'react'
import geniusImg from "../assets/genius-img.jpg"
import blogImg from "../assets/blog-img.jpg"
import ecommerceImg from "../assets/ecommerce.jpg"
import googleImg from "../assets/google.jpg"
import universityImg from "../assets/university.jpg"


const projectData = [
  {
    image: geniusImg,
    title: "Genius AI (Saas)",
    description: "Next.js , Shadcn UI, Tailwind Css, MongoDB, Stripe , Rapid API",
    website:"https://ai-genius.vercel.app",
    github:"https://github.com/arpitsrivastava54/genius-saas",
  },
  {
    image: ecommerceImg,
    title: "Monkey (E-commerce)",
    description: "React.js , Redux Toolkit, SCSS , Express.js, Stripe, MongoDB, Firebase",
    website:"https://monkeycloth.vercel.app/",
    github:"",
  },
  {
    image: blogImg,
    title: "Blog Website",
    description: "React.js , Redux Toolkit, Tailwind Css, MongoDB, Express.js",
    website:"https://as-blogify.netlify.app/",
    github:"https://github.com/arpitsrivastava54/blogify-frontend",
  },
  // {
  //   image: ecommerceImg,
  //   title: "Monkey (E-commerce)",
  //   description: "React.js , Redux Toolkit, SCSS , Express.js, Stripe, MongoDB, Firebase",
  //   website:"https://asecommerce.netlify.app/",
  //   github:"",
  // },
 
  {
    image: googleImg,
    title: "Google Search Clone",
    description: "React.js , Redux Toolkit, Tailwind Css, RapidAPI",
    website:"https://khojo-search.netlify.app/",
    github:"https://github.com/arpitsrivastava54/khojo-web-app",
  },
  {
    image: universityImg,
    title: "University Website",
    description: "HTML , CSS , JavaScript",
    website:"https://osmuniversity.netlify.app/",
    github:"",
  },
]



const Projects = () => {
  return (
    <main className='w-full my-5' id='projects'>
      <h2 className='my-5 text-zinc-200 text-2xl'>Projects</h2>
      <div className='w-full flex flex-wrap gap-5 justify-center lg:justify-between pe-0 lg:pe-5'>
        {
          projectData.map((item) => (
            <div key={item.title} className='main-container overflow-hidden w-[80%] lg:w-[22%] relative cursor-pointer h-[270px] rounded-2xl hover:shadow-zinc-500 hover:shadow-lg duration-300 hover:scale-105'>
              <div className="image-box h-1/2">
                <Image src={item.image} className='rounded-t-2xl w-full h-full object-cover' alt='' />
              </div>
              <div className="content-box h-1/2 bg-zinc-100 p-3 rounded-b-2xl text-[#0e0e2e]">
                <h2 className='text-lg font-semibold'>{item.title}</h2>
                <p className='text-sm lg:text-xs text-slate-600 mt-2'>{item.description}</p>
              </div>
              <div className='show-overlay w-full flex flex-col gap-5 justify-center items-center absolute bottom-0 bg-[black] rounded-2xl'>
                <a href={item.website} target='_blank' className='text-white hidden font-bold hover:bg-white hover:text-black rounded-3xl px-5 py-2 border'>Visit Site</a>
                <a href={item.github != "" ? item.github : "https://github.com/arpitsrivastava54"} target='_blank' className='text-white hidden font-bold rounded-3xl px-5 py-2 border  hover:bg-white hover:text-black'>Visit Source Code</a>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Projects
