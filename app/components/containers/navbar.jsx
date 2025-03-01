import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Signup from '../forms/signup';
import Plustox from '../ui/plustox';
import SignInForm from '../forms/signinform';
import { auth } from '@/auth';

export default async function Navbar() {
  const session = await auth();
  const adminEmail = process.env.ADMIN_EMAIL; // Env se admin email le rahe hain

  return (
    <nav className='fixed top-0 left-1/2 rounded-full -translate-x-1/2 w-[80%] z-[999] flex justify-between items-center border mt-5'>

      <div>
        <Link href={session?.user?.email === adminEmail ? "/admindashboard" : "/"}>
          <Image className='rounded-full' src="/Logo.png" width={75} height={75} alt="Logo Image" />
        </Link>
      </div>

      <div className='flex gap-1'>
        <input
          className="bg-[#d3d9d4] text-[#748d92] font-thin border-none py-1 px-2 rounded-full 
             placeholder-[#748d92] outline-none transition-all hover:shadow-lg"
          type="search"
          name="testCode"
          id="testCode"
          placeholder="Enter Live Quize Code"
        />

        <label className='bg-[#212a31] text-[#d3d9d4] hover:text-[#212a31] p-2 hover:bg-[#d3d9d4] hover:p-2 rounded-full' htmlFor="testCode">
          <button className=''>Join</button>
        </label>
      </div>

      <div className=' relative mr-1 rounded-full blowUpOnHover p-1'>
        <details className='relative'>
          <summary className='list-none cursor-pointer text-4xl'>
            <Plustox />
          </summary>
          <div className='p-4 SignInSignUpToast flex flex-col justify-start items-center gap-1'>
            <div className='border-b rounded-full bg-[#d3d9d4a1] text-[#212a31] w-full'>
              <p className='text-center text-2xl'>Control Panel</p>
            </div>
            <div className='flex border-t rounded-2xl w-full gap-[0.05rem] bg-[#d3d9d4a1] text-[#212a31]'>
              <div className='flex border-r justify-center items-center w-1/2'>
                <SignInForm />
              </div>
              <div className='flex border-l justify-center items-center w-1/2'>
                <Signup />
              </div>
            </div>
          </div>
        </details>
      </div>

    </nav>

  )
}
