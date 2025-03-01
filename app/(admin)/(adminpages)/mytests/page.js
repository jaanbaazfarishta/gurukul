import React from 'react'

export default function Mytets() {
  return (
    <div className='fixed pt-28 px-5 bg-[#ffffff6b] text-[#212a31] w-5/6 right-0 h-full'>
      <div className=''>
        <h1 className='cursor-pointer text-2xl hover:text-[#2e3944]  text-[#212a31] tracking-widest'>My Tests</h1>
      </div>
      <div className='flex justify-between items-center'>
        <div className=' flex justify-center gap-2'>
          <button className='rounded-xl text-[#d3d9d4] hover:text-stone-50 bg-[#2e3944] hover:bg-[#212a31] py-1 px-2 text-sm'>New Test</button>
          <button className='rounded-xl hover:text-[#d3d9d4] text-stone-50 bg-[#d3d9d4] hover:bg-[#748d92] p-1 text-sm'>New Folder</button>
        </div>
        <div>2</div>
      </div>
      <div>3</div>
      <div>4</div>
    </div>
  )
}
