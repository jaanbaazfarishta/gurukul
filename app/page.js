import { CgAirplane } from "react-icons/cg";

export default function Home() {
  return (
    <main className="relative w-screen">

      <div className="MovingLinearBackground rotate-180 h-screen w-full relative z-[500] flex justify-start sm:pl-20 pl-5 pt-16 max-sm:pt-28">

        <div className="border-t border-[var(--foreground)] absolute AnimatedWidth FadingDimensions flex justify-end">
          <div className="text-xs absolute top-[-0.39rem] right-[-0.5rem]">
            <CgAirplane />
          </div>
        </div>

        <div className="border-r border-[var(--foreground)] absolute -rotate-45 AnimatedHeightHalf FadingDimensions origin-top-right flex items-end">
          <div className="text-xs rotate-90 bottom-[-0.39rem] right-[-0.39rem] absolute">
            <CgAirplane />
          </div>
        </div>

        <div className="border-r border-[var(--foreground)] absolute AnimatedHeight FadingDimensions flex items-end">
          <div className="text-xs rotate-90 bottom-[-0.39rem] right-[-0.39rem] absolute">
            <CgAirplane />
          </div>
        </div>

      </div>

      <div className="DivFixed ZDown h-screen">
        <video className="w-full h-full object-cover" src="/HeroVideo.mp4" autoPlay loop muted></video>
      </div>

      <div className="DivFixed ZUp h-screen bg-transparent flex flex-col justify-end items-start">
        <div className="gradient-text LargeWelcomeText max-sm:pb-32 pb-20 sm:pl-10 pl-7 text-[3rem] sm:text-[4rem] lg:text-[5rem] leading-none">
          <p>Welcom to</p>
          <p>PHYSiCS bRO</p>
          <p>GURUKUL CLASSES</p>
        </div>
      </div>

      <div className="DivRelative h-screen bg-slate-700">4</div>
    </main>
  );
}