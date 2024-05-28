import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TinaAbout() {
  return (
    <div className='container mx-auto my-20 flex justify-between gap-12 items-center'>
      <div className='w-[50%] flex flex-col gap-y-10'>
            <h1 className='text-4xl'>Tina Micallef</h1>
            <p className='text-lg'>Advanced Physiotherapy service with over 25 years of NHS and private practice, using years of experience to keep you active. Working across the NHS within London teaching hospitals.</p>
            <Link href={'/'}>
            <button className="px-12  lg:py-4 py-3 text-white text-xl font-semibold hover:bg-[#40a5b3] transition duration-300 rounded-full bg-[#4fc0d0]">Read More</button>
            </Link>
      </div>
      <div className='w-[50%]'>
        <Image src={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/IMG_9692-1-1024x1024.jpg'} width='630' height={`900`} />
      </div>
    </div>
  )
}

export default TinaAbout