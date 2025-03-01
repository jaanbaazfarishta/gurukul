import { auth } from '@/auth';
import Image from 'next/image';
import React from 'react'

export default async function Signup() {
    const session = await auth();


    return (
        <div className="border my-4 rounded-xl">
            <div className="p-4">

                {session && session.user && session.user.name ? (
                    <div className="text-center underline text-lg p-4">
                        <p>Avatar</p>
                    </div>
                ) : (
                    <div className="text-center underline text-lg p-4">
                        <p>Join Gurukul</p>
                    </div>
                )}

                {session && session.user && session.user.name ? (
                    <div className='flex justify-center items-center border rounded-2xl h-[15vh] mb-2'>
                        <Image className='object-cover rounded-2xl' src={session.user.image.startsWith('http') ? session.user.image : `/${session.user.image}`}
                            width={110}
                            height={110}
                            alt="Profile Picture"
                        />
                    </div>
                ) : (
                    <form className="mb-2" action="" method="get">
                        <div className="relative flex flex-col">
                            <input
                                className="SignFormInput"
                                type="text"
                                name="yourname"
                                id="yourname"
                                placeholder=" " // Placeholder add kiya label animation ke liye
                            />
                            <label className="SignFormLabel" htmlFor="yourname">
                                Your Name
                            </label>
                        </div>

                        <div className="relative flex flex-col mt-4">
                            <input
                                className="SignFormInput"
                                type="tel"
                                name="mobile"
                                id="mobile"
                                placeholder=" " // Placeholder add kiya label animation ke liye
                            />
                            <label className="SignFormLabel" htmlFor="mobile">
                                Mobile No.
                            </label>
                        </div>

                        <div className="relative flex flex-col mt-4">
                            <input
                                className="SignFormInput"
                                type="text"
                                name="class"
                                id="class"
                                placeholder=" " // Placeholder add kiya label animation ke liye
                            />
                            <label className="SignFormLabel" htmlFor="class">
                                Class
                            </label>
                        </div>

                        <div className="relative flex flex-col mt-4">
                            <input
                                className="SignFormInput"
                                type="text"
                                name="city"
                                id="city"
                                placeholder=" " // Placeholder add kiya label animation ke liye
                            />
                            <label className="SignFormLabel" htmlFor="city">
                                City
                            </label>
                        </div>

                        <button type="submit" className="mt-2 bg-[#124e66] text-[#d3d9d4] text-sm px-4 py-1 rounded-xl">
                            Submit
                        </button>
                    </form>
                )}


                <hr />
            </div>
        </div>
    )
}
