import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function UpFooter() {
    return (
        <>
            <div className='bg-[#a7c9d8] text-white'>
                <div className="md:container mx-auto px-3 py-16 lg:flex-row flex-col flex justify-between gap-y-10">
                    <div className='md:w-[33%] text-lg font-serif'>
                        <p >blablalba@website.com</p>
                        <p className='my-10'>800-123-456</p>
                        <p>23 Evergreen Street,<br />
                            San Francisco, California <br />
                            USA</p>
                    </div>
                    <div className='md:w-[66%] flex flex-col gap-y-5'>
                        <p>If you prefer, you can send us an email reporting your current situation and we will help you.</p>
                        <div className='flex justify-between gap-8 items-center'>
                            <Input className='bg-transparent placeholder:text-white' placeholder='Name' type='text' />
                            <Input className='bg-transparent placeholder:text-white' placeholder='Email' type='email' />
                        </div>
                        <textarea rows="3" className='bg-transparent placeholder:text-white p-5 w-full border-white border' placeholder='Your Message' type='text' />
                        <Button className='w-fit px-8 rounded-[5px] uppercase'>Let&apos;s Talk</Button>
                    </div>

                </div>
            </div>

            <div className='bg-[#0000000d]'>
                <div className="md:container py-20 mx-auto px-3 flex-col flex justify-center items-center gap-y-3">
                    <h1 className='text-[#255b73] text-3xl font-semibold'>NEWSLETTER</h1>
                    <p className='text-xl font-serif text-center text-[#0c222c]'>Receive self-help content that may be useful to you!</p>
                    <div className='flex w-full lg:w-[55%] xl:w-[40%] md:w-[70%] sm:flex-row flex-col gap-y-3 mt-4 border p-2 justify-between items-center'>
                        <Input className='' placeholder='Your Name' type='text' />
                        <Input className=' border-l-0' placeholder='Your Email' type='email' />
                        <Button className='sm:w-fit w-full px-8  uppercase'>Subscribe</Button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default UpFooter