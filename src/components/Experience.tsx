"use client"
import React from 'react'
import cbMainImage from "../assets/cb-main.jpg"
import cbStoreImage from "../assets/cb-store.jpg"
import cbAdminImage from "../assets/cb-admin.webp"
import Image from 'next/image'

const Experience = () => {
  return (
    <main className='my-10 m-0 lg:me-5' id='internship'>
      <h2 className='text-2xl text-zinc-200 my-10'>Experience</h2>
      <section className='bg-secondry w-full p-3 lg:p-5 rounded-2xl'>
        <div className='flex justify-evenly'>
          <div className="company-logo w-[10%] rounded-full justify-between ">
            <img src="https://media.licdn.com/dms/image/D4D0BAQHT0m7QR6qURg/company-logo_100_100/0/1695289577650?e=1713398400&v=beta&t=sPy8wEX_YEHBR4cB9wBSqKSs6KINoHYsXAtUX4N61zo" alt="" className='w-full rounded-full transform scale-75' />
          </div>
          <div className="content w-[85%]">
            <h2 className='text-base lg:text-xl text-zinc-100'>React Developer</h2>
            <p className='text-xs lg:text-sm text-zinc-200'>CareerBanao <span> . </span>Internship</p>
            <div className='text-zinc-400 text-xs lg:text-sm'>
              <p>Nov 2023 - Present <span> . </span> 3 mos</p>
              <p>Noida , Uttar Pradesh, India <span> . </span> Remote</p>
            </div>
            <br />
            <div className='text-zinc-300 text-xs lg:text-sm'>
              <p> Designed Engaging UIs: Spearheaded the creation of visually captivating user interfaces during my CareerBanao internship, ensuring a 20% improvement in overall user satisfaction.</p>
              <br />
              <p>Executed Seamless API Integration: Played a pivotal role in integrating APIs, fostering efficient communication between frontend and backend systems, resulting in a 15% reduction in load times.</p>
              <br />
              <p>Optimized User Experience: Employed user-centric design principles, resulting in a 25% increase in user engagement and a positive impact on the overall user experience.Designed Engaging UIs: Spearheaded the creation of visually captivating user interfaces during my CareerBanao internship, ensuring a 20% improvement in overall user satisfaction. Executed Seamless API Integration: Played a pivotal role in integrating APIs, fostering efficient communication between frontend and backend systems, resulting in a 15% reduction in load times. Optimized User Experience: Employed user-centric design principles, resulting in a 25% increase in user engagement and a positive impact on the overall user experience. </p>
              <br />
            </div>
            <p className='text-zinc-300 text-xs lg:text-sm'>
              <span className='text-zinc-50 text-sm lg:text-base'>Skills : </span>
              TypeScript <span> . </span>
              Ant Design <span> . </span>
              Redux.js <span> . </span>
              Tailwind CSS <span> . </span>
              React.js
            </p>
          </div>
        </div>

        <h2 className='my-5 border-b inline-block px-1 pb-1'>Work In Websites in this Company =={">"}</h2>

        <div className="websites w-full my-5 flex gap-3 justify-evenly">
          {/* first websites */}
          <div className='w-1/3 lg:w-1/5'>
          <p className='text-xs my-2 text-zinc-400 text-center'>CarrerBanao.org</p>
            <div className="exp-card w-full relative bg-white rounded-xl">
              <Image src={cbMainImage} alt='' className='rounded-lg object-contain'/>
              <div className='exp-overlay justify-center items-center hidden w-full bg-black absolute top-0 hover:rounded-md z-55'>
                <a href="https://careerbanao.org/" target='_blank' className='border font-bold px-5 py-2 rounded-3xl'>Visit site</a>
              </div>
            </div>
            <p className='text-xs my-2 text-zinc-400 text-center'>Contribution in all pages</p>
          </div>

          {/* second websites  */}
          <div className='w-1/3 lg:w-1/5'>
          <p className='text-xs my-2 text-zinc-400 text-center'>CarrerBanao.org</p>
            <div className="exp-card w-full relative bg-white rounded-xl">
              <Image src={cbStoreImage} alt='' className='rounded-lg object-contain'/>
              <div className='exp-overlay justify-center items-center hidden w-full bg-black absolute top-0 hover:rounded-md z-55'>
                <a href="https://cbstore.careerbanao.org/" target='_blank' className='border font-bold px-5 py-2 rounded-3xl'>Visit site</a>
              </div>
            </div>
            <p className='text-xs my-2 text-zinc-400 text-center'>Contribution in all pages</p>
          </div>

          {/* third websites  */}
          <div className='w-1/3 lg:w-1/5'>
          <p className='text-xs my-2 text-zinc-400 text-center'>CarrerBanao.org</p>
            <div className="exp-card w-full relative bg-white rounded-xl">
              <Image src={cbAdminImage} alt='' className='rounded-lg object-contain'/>
              <div className='exp-overlay justify-center items-center hidden w-full bg-black absolute top-0 hover:rounded-md z-55'>
                <a  className='border font-bold px-5 py-2 rounded-3xl'>Working..</a>
              </div>
            </div>
            <p className='text-xs my-2 text-zinc-400 text-center'>Contribution in all pages</p>
          </div>
         
        </div>
      </section>
    </main>
  )
}

export default Experience
