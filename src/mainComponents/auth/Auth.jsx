"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

function Auth() {
    const route = useRouter()

 const handleSubmit = e => {
      e.preventDefault()
      const form = e.target;
      const password = form.password.value;
      const email = form.email.value;
      
      if(email === 'admin@gmail.com' && password === 'admin'){
          route.push('/dashboard')
          toast.success('loggedIn successfully!')
      }else{
          toast.error('incorrect password or email!')
      }
 }

    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-200'>
            <div className='xl:w-[40%] lg:w-[50%] md:w-[70%] w-[90%]  mx-auto border p-5 border-gray-300 rounded'>
                <h1 className='text-xl font-semibold mb-4'>Sign In</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
                    <Input name='email' type="email" placeholder="Email" />
                    <Input name='password' type="password" placeholder="Password" />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
            <Toaster/>
        </div>
    )
}

export default Auth