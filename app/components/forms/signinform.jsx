import React from "react";
import { SignInButton, SignOutButton } from "../ui/googlesignbutton";
import { auth } from "@/auth";


export default async function SignInForm() {
    const session = await auth();

    return (
        <div className="border my-4 rounded-xl">

            <div className="p-4">

                {session && session.user && session.user.name ? (
                    <div className="text-center underline text-lg p-4">
                        <p>{session.user.name}</p>
                    </div>
                ) : (
                    <div className="text-center underline text-lg p-4">
                        <p>Sign In</p>
                    </div>
                )}

                {session && session.user && session.user.name ? (
                    <div className="text-sm flex justify-center items-center gap-1">
                        <div className="text-end">
                            <p>P.B. Code :</p>
                            <p>Course :</p>
                        </div>
                        <div className="text-start">
                            <p>XYZ123</p>
                            <p>P.B. 12th Physics</p>
                        </div>
                    </div>
                ) : (
                    <form className="mb-2" action="" method="get">
                        <div className="relative flex flex-col">
                            <input
                                className="SignFormInput"
                                type="text"
                                name="code"
                                id="code"
                                placeholder=" "
                            />
                            <label className="SignFormLabel" htmlFor="code">
                                Student Code
                            </label>
                        </div>
                        <div className="relative flex flex-col mt-4">
                            <input
                                className="SignFormInput"
                                type="password"
                                name="password"
                                id="password"
                                placeholder=" "
                            />
                            <label className="SignFormLabel" htmlFor="password">
                                Password
                            </label>
                        </div>
                        <button type="submit" className="mt-2 bg-[#124e66] text-[#d3d9d4] text-sm px-4 py-1 rounded-xl">
                            Sign In
                        </button>
                    </form>
                )}

                {session && session.user && session.user.name ? (
                    <div className="LoadingDiv border border-blue-900 w-full h-2 rounded-full my-4"></div>
                ) : (
                    <div className="text-center border-b">or</div>
                )}

                <div className="my-2 flex flex-col text-sm justify-center items-center gap-2">
                    <div className="border rounded-2xl px-2 py-1 bg-[#124e66] text-[#d3d9d4]">
                        {session && session.user && session.user.name ? (
                            <SignOutButton />
                        ) : (
                            <SignInButton />
                        )}
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}
