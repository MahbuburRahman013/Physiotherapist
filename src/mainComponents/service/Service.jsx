import Image from "next/image"


function Service() {
    return (
        <div className='md:container px-3 flex-col lg:flex-row mx-auto my-20 flex justify-between gap-16 items-center'>
            <div className='lg:w-[50%] w-full flex flex-col gap-y-5'>
                <h1 className='sm:text-5xl text-4xl font-bold mb-5'>Physiotherapy services</h1>
                <p className='text-lg'>
                    Expert assessment and treatment can be offered to all, from elite athlete to office workers and schoolchildren.  Give your body the care and attention it deserves.  Having years of experience gaining a wide breadth of knowledge and excellent communication skills to you informed whist aiding you.
                </p>
                <p className='text-lg'>
                    Physiotherapy is a science based, increasingly evidence-based practice, with the aim to restore joint, nerve and muscle.  My consultations take a "holistic" approach to your health; looking at all aspects of life which are affected by pain, dysfunction, biomechanics, posture, disease, or aging.
                </p>
                <p className='text-lg'>
                    As your physiotherapist I will offer you the most effective course of treatment for you needs this may consist of myofascial release, mobilisations, stretching and home exercises, ergonomic and postural advice.  Understanding the cause and how to manage and prevent problems returning.  Physiotherapy aims to restore fitness and function, including flexibility, strength, coordination and balance.
                </p>

            </div>
            <div className='lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%]'>
                <Image src={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_525137929.jpeg'} width='630' height={`900`} alt='img' />
            </div>
        </div>
    )
}

export default Service