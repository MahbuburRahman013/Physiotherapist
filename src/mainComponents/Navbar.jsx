"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


function Navbar() {
  const pathname = usePathname()
  const [toggle, setToggle] = useState(false)

  const navLinks = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Blog',
      link: '/blog'
    },
  ]


  return (
    <div className="px-3 lg:container mx-auto gap-y-5 flex flex-col lg:flex-row justify-between lg:items-center bg-white py-6">
      <Image className="xl:block hidden" src='https://www.physio-therapies.co.uk/wp-content/uploads/2023/11/PHYSIO_THERAPIES_LOGO_-1024x131.png' height={200} width={500} alt='image' />
      <Image className="xl:hidden block" src='https://www.physio-therapies.co.uk/wp-content/uploads/2023/11/PHYSIO_THERAPIES_LOGO_-1024x131.png' height={200} width={380} alt='image' />

      <div className="flex  justify-between gap-10 items-center">
        <div className="lg:flex hidden gap-10 justify-center items-center">
          {
            navLinks.map((item, index) => <Link className={` ${pathname === item.link ? 'text-[#1b6b93]' : ''} text-lg hover:text-[#1b6b93] font-semibold`} key={index} href={item.link}>{item.name}</Link>)
          }
        </div>
        <div onClick={() => setToggle(!toggle)} className="block lg:hidden text-4xl cursor-pointer">
          {
            toggle ? <RxCross2 /> : <FiMenu />
          }
        </div>
        <button className="sm:px-20 px-14 lg:py-4 py-3 text-white md:text-xl md:font-semibold hover:bg-[#40a5b3] transition duration-300 rounded-full bg-[#4fc0d0]">Contact</button>
      </div>

      <div className={`${toggle ? 'left-0' : '-left-[500px]'} absolute transition-all z-50 duration-500 top-0 p-3 h-full bg-slate-50 border-l`}>
        <RxCross2 onClick={()=> setToggle(!toggle)} className="cursor-pointer text-2xl" />
        <div className="flex gap-4 justify-start px-20 pt-24 flex-col h-full items-center">
          {
            navLinks.map((item, index) => <Link className={` ${pathname === item.link ? 'text-[#1b6b93]' : ''} text-lg hover:text-[#1b6b93] font-semibold`} key={index} href={item.link}>{item.name}</Link>)
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar