import Link from 'next/link';
import React from 'react'
import { CiHome, CiShare2, CiUser, CiViewList } from "react-icons/ci";
import { PiDatabase, PiTrashLight, PiUsersThree } from "react-icons/pi";
import { MdOutlineFolderShared, MdRestore } from "react-icons/md";
// import { PiDatabase } from "react-icons/pi";


export default function Adminsidenav() {
    return (

        <div className='fixed top-0 left-0 h-screen bg-[#d3d9d431] w-1/6 flex flex-col justify-center items-start gap-3 py-32 px-12 text-[#212a31]'>

            <Link href="/admindashboard" className='border-b hover:border-[#124e66] px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><CiHome /> Home</Link>
            <Link href="/mytests" className='border-b hover:border-[#124e66] px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><CiViewList /> My tests</Link>
            <Link href="/sharedwithme" className='border-b hover:border-[#124e66] px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><CiShare2 /> Shared with me</Link>
            <p className='text-xs mx-4 mt-4 font-light italic'>Team Work</p>
            <Link href="/teamtests" className='border-b hover:border-[#124e66] px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><PiUsersThree /> Tests by Team</Link>
            <Link href="/teamtests" className='border-b hover:border-[#124e66] px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><MdOutlineFolderShared /> Shared Tests</Link>
            <p className='text-xs mx-4 mt-4 font-light italic'>
                <Link href="/members">Team Members</Link>
            </p>
            <div className='h-40 w-full bg-[#748d9277] text-sm font-thin flex flex-col gap-2 text-[#d3d9d4] py-2 rounded-lg overflow-scroll'>
                <Link href="/teamtests" className='border-b px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><CiUser /> User Name One</Link>
                <Link href="/teamtests" className='border-b px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><CiUser /> User Name Two</Link>
                <Link href="/teamtests" className='border-b px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><CiUser /> User Name Three</Link>
                <Link href="/teamtests" className='border-b px-2 rounded-xl border-[#124e6625] hover:bg-[#124e6625] w-full text-left  flex justify-start gap-1 items-center'><CiUser /> User Name Four</Link>
            </div>

            <div className='mt-[25vh] text-xs flex flex-col gap-2 text-stone-950'>
                <Link className='px-2 py-1 rounded-lg hover:text-[#d3d9d4] hover:bg-[#212a31] flex justify-end items-center gap-1' href="/userdata"><PiDatabase /> Data Base</Link>
                <details className="relative">
                    <summary className='list-none cursor-pointer px-2 py-1 rounded-lg hover:text-[#d3d9d4] hover:bg-[#212a31] flex justify-end items-center gap-1'>
                        <PiTrashLight /> Trash
                    </summary>
                    <div className='TrashWindow shadow-lg overflow-auto'>
                        <h2 className="text-2xl font-semibold text-gray-900">Trash</h2>
                        <p className="text-sm text-gray-500">Items in trash are removed after 30 days.</p>

                        <table className="w-full mt-4 mb-10">
                            <thead>
                                <tr className="text-left text-gray-600">
                                    <th className="py-2">Name</th>
                                    <th className="py-2">Deleted</th>
                                    <th className="py-2">Days left</th>
                                    <th className="py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2].map((_, index) => (
                                    <tr key={index} className="group hover:bg-gray-100">
                                        <td className="py-2 flex items-center gap-2">
                                            <PiTrashLight className="text-gray-500" />
                                            My first presentation <br />
                                            <span className="text-xs text-gray-500">1 SLIDE</span>
                                        </td>
                                        <td className="py-2 text-gray-700">about {index + 1} hour ago</td>
                                        <td className="py-2 text-gray-700">30 days</td>
                                        <td className="py-2">
                                            <button className="invisible group-hover:visible flex justify-center items-center gap-1"> <MdRestore />Restore</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="text-sm text-gray-500">Click on trash to close this window</p>
                    </div>
                </details>

            </div>
        </div>

    )
}
