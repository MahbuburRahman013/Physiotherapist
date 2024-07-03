import { Button } from '@/components/ui/button';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";

function OurTeam() {
    const data = [
        {
            img: 'https://uploads-ssl.webflow.com/62d2b238ccbacca3a2e58611/62e29ad334a88ea6702a66af_portrait-of-a-young-businesswoman-holding-eyeglasses-in-hand-against-gray-backdrop.jpg',
            title: 'Amellia Grey',
            position: 'CEO',
        },
        {
            img: 'https://uploads-ssl.webflow.com/62d2b238ccbacca3a2e58611/62d451e7683aff4b5ea6e4a9_stylish-confident-businesswoman-smiling.jpg',
            title: 'Juliana Heidenreich',
            position: 'Therapist'
        },
        {
            img: 'https://uploads-ssl.webflow.com/62d2b238ccbacca3a2e58611/62e29af52ce9df7abe10b7ca_portrait-of-beautiful-young-woman-standing-on-grey-wall.jpg',
            title: 'Clarissa Welch',
            position: 'Career Coach'
        },
        {
            img: 'https://uploads-ssl.webflow.com/62d2b238ccbacca3a2e58611/62e29b0222762281cce0397d_portrait-of-smiling-caucasian-senior-businessman%20(1).jpg',
            title: 'Marcellus Barton',
            position: 'Behavior Analyst'
        },
    ]

    return (
        <div className='w-full'>
            <div className='flex justify-end mb-20 md:mt-40'>
                <div className='bg-[#85a6bc] text-white p-5 md:w-[63%]'>
                    <h1 className='sm:text-4xl text-2xl font-bold '>OUR TEAM</h1>
                    <p className='font-serif sm:text-2xl text-lg mt-3'>Feel free to call one of our professionals.</p>
                </div>
            </div>

            <div className='md:container mx-auto gap-10 px-3 mb-24 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {
                    data?.map((item, index) => {

                        return (
                            <div key={index}>
                                <div className='h-[21rem] border'>
                                    <img className='w-full h-full object-cover object-center' src={item?.img} alt="" />
                                </div>

                                <h1 className='text-2xl font-semibold mt-8'>{item?.title}</h1>
                                <p className='text-xl font-serif mt-1'>{item?.position}</p>
                                <div className='flex text-gray-400 gap-6 mt-3 text-[1.4rem] '>
                                    <FaLinkedin />
                                    <FaTwitter />
                                    <IoBasketballOutline />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='bg-[#3382a56e] py-16 mb-20'>
                <div className='md:container lg:px-20 flex relative justify-end mx-auto px-3' >
                    <img className='md:h-[40rem] h-[32rem] right-0 w-[57rem] object-cover object-center' src="https://uploads-ssl.webflow.com/62d2b237ccbaccb4fde585eb/62e041417f3e447f4fa1d85f_aleksandra-sapozhnikova-DnMoQpu7AVs-unsplash.jpg" alt="" />

                    <div className='absolute bg-[#3382a5e6] sm:w-[26rem] w-[18rem] sm:top-20 md:left-32 px-3 md:px-20 py-10 text-white'>
                        <h1 className='text-3xl font-bold'>WHY YOU SHOULD HAVE THERAPY?</h1>
                        <p className='font-serif text-lg font-extralight mt-8'>
                        Organizing your feelings and thoughts, getting to know yourself, increasing your self-esteem, developing your emotional intelligence, improving your relationships need attention. Come talk to us today!
                        </p>
                        <Button className='mt-8 rounded'>EXPLORE</Button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OurTeam