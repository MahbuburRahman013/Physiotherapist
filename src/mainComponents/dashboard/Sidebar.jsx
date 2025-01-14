"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiArrowRightSFill } from "react-icons/ri";
import Swal from "sweetalert2";

function Sidebar() {
    const route = usePathname()
    const [isTrue, setIsTrue] = useState(true);
    const router = useRouter()

    const routes = [
        {
            name: 'Post Blog',
            link: '/dashboard'
        },
        {
            name: 'Manage Blog',
            link: '/dashboard/manage'
        },
    ]


    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout"
        }).then((result) => {
            if (result.isConfirmed) {

                router.push('/')
                localStorage.removeItem('adminInfo');
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="flex">

            <div className={`bg-[#4fc1d027] transition duration-300 min-h-screen  ${isTrue ? 'w-[350px]' : 'w-[0px] hidden'}`}>
                <div className="p-3 shadow-md flex gap-x-4 justify-between items-center">
                    <Link href={'/'}>
                        <Image src='https://www.physio-therapies.co.uk/wp-content/uploads/2023/11/PHYSIO_THERAPIES_LOGO_-1024x131.png' height={200} width={380} alt='image' />
                    </Link>
                    <button onClick={() => setIsTrue(!isTrue)} className="hover:scale-105 transition duration-200 p-1 bg-[#4fc1d0] rounded-full h-full"><RxCross2 /></button>
                </div>

                <div className="mt-10 flex flex-col gap-y-1">
                    {
                        routes.map((item, index) => {
                            return (
                                <Link className={`px-3 text-white text-lg py-2  ${route === item.link ? 'bg-[#168f9f]' : 'bg-[#4fc1d0]'}`} key={index} href={item.link}>
                                    <p>{item.name}</p>
                                </Link>
                            )
                        })
                    }
                    <button onClick={handleLogOut} className="px-3 text-white text-lg py-2 bg-[#4fc1d0] hover:bg-[#168f9f] text-start transition duration-300">Log Out</button>
                </div>
            </div>
            <div className={`${isTrue ? 'hidden' : 'block'} h-screen flex justify-center items-center`}>
                <button onClick={() => setIsTrue(!isTrue)} className="py-5 bg-[#4fc1d0] text-2xl rounded-r"><RiArrowRightSFill /></button>
            </div>
        </div>
    )
}

export default Sidebar