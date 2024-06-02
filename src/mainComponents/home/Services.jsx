import Image from "next/image"
import Link from "next/link"


function Services() {
    return (
        <div className="bg-[#f5f5f5] py-16">
            <div className='md:container px-3 flex-col-reverse lg:flex-row mx-auto flex justify-between gap-16 items-center'>

                <div className='md:w-[50%] md:h-[500px] h-[400px] gap-5 grid grid-rows-3 grid-cols-4'>
                    
                        <img className="col-span-2 h-full object-cover row-span-2" src={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_283483720-1024x682.jpg'}  />
                        <img className=" h-full object-cover" src={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_186427438-scaled.jpeg'}  />
                        <img className=" h-full object-cover" src={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_529349040-scaled.jpeg'}  />
                        <img className="col-span-2 h-full object-cover row-span-2" src={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/IMG_9696-1024x683.jpg'}  />
                        <img className="h-full object-cover" src={'https://www.physio-therapies.co.uk/wp-content/uploads/bb-plugin/cache/AdobeStock_528361659-683x1024-square-f2cb6ad56e5e527032df913ce6b427c7-xiuhv5w248dt.jpeg'}  />
                        <img className="h-full object-cover" src={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_62079559-1024x717.jpeg'}  />
                   
                    

                </div>

                <div className='lg:w-[50%] w-full flex flex-col gap-y-10'>
                    <h1 className='text-4xl font-bold'>Physiotherapy services</h1>
                    <p className='text-lg'>Expert assessment and treatment can be offered to all, from elite athlete to office workers and schoolchildren.  Give your body the care and attention it deserves. Having years of experience gaining a wide breadth of knowledge and excellent communication skills to you informed whist aiding you.</p>
                    <Link href={'/'}>
                        <button className="px-12  lg:py-4 py-3 text-white md:text-xl md:font-semibold hover:bg-[#40a5b3] transition duration-300 rounded-full bg-[#4fc0d0]">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services