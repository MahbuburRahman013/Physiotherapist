import { FaRegClock } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import UpFooter from "./home/UpFooter";

function Footer() {
    return (
        <>
        <UpFooter/>
            <div className="bg-[#1b6b93]">
                <div className="bg-[url('https://www.physio-therapies.co.uk/wp-content/uploads/2023/11/xv.png')]  bg-repeat py-20  text-white " >
                    <div className="lg:container w-full px-3 mx-auto flex  justify-between lg:flex-row flex-col items-start gap-14 ">

                        <div className="flex flex-col  lg:w-[40%] sm:w-[70%] gap-5">
                            <h2 className="text-2xl font-semibold">About Me</h2>
                            <p className="">Advanced Physiotherapist with over 25 years of NHS and private experience. Providing a high level of assessment and treatment in musculoskeletal, orthopaedic and trauma.</p>
                        </div>

                        <div className="flex  lg:w-[30%] sm:w-[70%] w-[100%] flex-col gap-5">
                            <h2 className="text-2xl font-semibold">Business Hours</h2>
                            <div className="flex flex-col gap-3">
                                <p className="flex gap-5 "><span className="text-xl mt-1"><FaRegClock /></span>Monday - Friday: 8:30 AM - 5:30 PM</p>
                                <p className="flex gap-5 "><span className="text-xl mt-1"><FaRegClock /></span>Saturday: 8:00 AM - 11:00 AM</p>
                            </div>

                        </div>

                        <div className="flex lg:w-[30%] sm:w-[70%] w-[100%] flex-col gap-5">
                            <h2 className="text-2xl font-semibold">Get In Touch!</h2>
                            <div className="flex flex-col gap-3">
                                <p className="flex gap-5 "><span className="text-xl mt-1 font-bold"><IoCall /></span>07969 483987</p>
                                <p className="flex gap-5  "><span className="text-xl mt-1"><FaRegMap /></span>Balmore Park Surgery Caversham RG4 7SS</p>
                                <p className="flex gap-5  "><span className="text-xl mt-1"><MdOutlineEmail /></span>contact@physio-therapies.co.uk</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-[#164b60] py-4">
                 <div className="lg:container mx-auto font-light text-gray-50 flex justify-between lg:flex-row flex-col lg:items-center items-start text-sm px-3 gap-y-1">
                    <p>© 2024 Physio Therapies. All Rights Reserved.</p>
                    <p className="flex gap-1 items-center">Crafted with care by HealthHosts <CiHeart/></p>
                 </div>
            </div>
        </>
    )
}

export default Footer