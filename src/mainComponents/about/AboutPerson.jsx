import Image from "next/image"
import { BiSolidRightArrow } from "react-icons/bi";


function AboutPerson() {

const data = [
    "Back pain",
    "Neck pain",
    "Joint pain",
    "Arthritis",
    "Sports injuries",
    "Soft tissue injuries",
    "Muscles/ligaments",
    "Foot problems",
    "Rehab issues"
]




    return (
        <div className="font-normal">
            <div className='md:container px-3 flex-col lg:flex-row mx-auto mt-20 flex justify-between gap-12 items-center'>
                <div className='lg:w-[60%] w-full flex flex-col gap-y-5'>
                    <h1 className='text-4xl mb-5 font-bold'>Tina Micallef</h1>
                    <p className='text-lg'>Provides an advanced physiotherapy service to keep you active with over 25 years of experience across the NHS including London teaching hospitals and private practices.</p>
                    <p className='text-lg'>Complimenting her physiotherapy skills Tina has over 30 years of Health and Fitness teaching and runs Pilates courses to aid clients with musculoskeletal dysfunction.</p>
                    <p className='text-lg'>
                        Tina’s experience allows her to deliver highly professional assessments and treatments in musculoskeletal, orthopaedics and trauma. This covers the objective measurement of your limitations creating a measurable, realistic, achievable recovery plan. This approach assists in helping guide your rehabilitation goals to the next level.
                    </p>

                </div>
                <div className='md:w-[40%] sm:w-[70%] w-[85%]'>
                    <Image src={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/IMG_9692-1-1024x1024.jpg'} width='530' height={`900`} />
                </div>
            </div>

            <div className='md:container px-3 flex-col lg:flex-row mx-auto mt-10 flex justify-between gap-12 items-center'>
                <div className='lg:w-[55%] w-full flex flex-col gap-y-5'>

                    <p className='text-lg'>Expert assessment and treatment can be offered to all, from elite athletes to office workers and school children.  Give your body the care and attention it deserves.</p>
                    <p className='text-lg'>
                        Physiotherapy is a science and increasingly evidence-based practice, with the aim to restore movement and function. It can also help to reduce your risk of injury or illness in the future. Consultations take a "holistic" approach to your health; looking at all aspects of life which are affected by pain, dysfunction, biomechanics, posture, disease, or aging.
                    </p>


                </div>
                <div className='lg:w-[45%] w-full flex flex-col gap-y-5'>

                    <p className='text-lg'>
                        As your physiotherapist we will offer you the most effective course of treatments for your needs which may consist of myofascial release, mobilisations, stretching, home exercises and ergonomic and postural advice.
                    </p>
                    <p className='text-lg'>
                        Our focus is on understanding and treating the underlying causes as well as how to manage and prevent problems returning.  Physiotherapy aims to restore fitness and function, including flexibility, strength, co-ordination and balance.
                    </p>

                </div>
            </div>

            <div className="bg-gray-100 py-20 mt-20">
                <div className="lg:container px-3 mx-auto sm:font-bold font-semibold">
                    <h1 className="sm:text-2xl text-xl">You may decide to choose Physiotherapy if you suffer from any Musculoskeletal (MSK) conditions listed below:</h1>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className="flex text-lg items-center gap-2">
                                        <BiSolidRightArrow className="text-[#4fc0d0]" />
                                        <p>{item}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <p className="font-normal italic text-[19px] mt-10">If you are under 18 years of age you will need to be accompanied by an adult.</p>
                    <p className="font-normal  text-[19px] mt-5">Booking online is self-funding only.  We are unable to reserve appointments.  Appointments unattended are non-refundable.</p>
                    <p className="text-[19px] mt-5">Professional Accreditation</p>
                    <p className="font-normal text-[19px] mt-5">Chartered Society of Physiotherapy (CSP)</p>
                    <p className="font-normal text-[19px] mt-5">Health and Care Professions Council (HCPC)</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPerson