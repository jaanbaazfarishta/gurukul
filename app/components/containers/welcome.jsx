import { TbHexagonLetterB, TbLetterB, TbLetterP, TbLetterPSmall, TbSquareLetterP } from "react-icons/tb";


export default function WelcomeScreen() {
    return (
        <div className="welcomeSection z-[1000] sm:min-h-screen min-h-svh bg-[#124e66] rounded-b-2xl fixed w-full flex justify-center items-center gap-2">
            <div className="absolute z-50 w-96 h-64 bg-[#124e66] -translate-y-40"></div>
            <p className="fadeUpText flex tracking-tighter text-7xl">
                <TbSquareLetterP />
                <TbHexagonLetterB />
            </p>
            <div className="fadeUpText items-center content-center text-2xl font-bold rounded-lg">
                <p className="tracking-widest">PHYSiCS bRO</p>
                <p className="tracking-tighter">GURUKUL CLASSES</p>
            </div>
        </div>
    )
}
