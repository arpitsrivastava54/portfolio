import Image from 'next/image'
import React from 'react'

import coverImg from "../assets/cover-image.jpg"
import profileImg from "../assets/profile-pic.jpg"


const customStyle = {
  backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${coverImg.src})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat"
}
const Hero = () => {
  console.log(coverImg.src)
  return (
    <main className='pe-5'>
      <section className='hero rounded-lg w-full bg-secondry h-[150px] flex' style={customStyle}>
          <div className="profile-pic w-1/6 flex justify-center items-center" >
            <Image src={profileImg} width={100} height={100} alt="" className='bg-red-400 rounded-full border-2'/>
          </div>
          <div className={`other-content w-5/6`}>
          </div>
      </section>
    </main>
  )
}

export default Hero
