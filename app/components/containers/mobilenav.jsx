import Image from 'next/image'
import React from 'react'

export default function Mobilenav() {
    return (
        <nav className='fixed top-0 left-1/2 bg-slate-800 rounded-xl -translate-x-1/2 w-[80%] z-[999] flex justify-between items-center border mt-5'>
            <div>
                <Image className='rounded-full' src="/Logo.png" width={75} height={75} alt="Logo Image" />
            </div>
            <div>2</div>
            <div>3</div>
        </nav>
    )
}
