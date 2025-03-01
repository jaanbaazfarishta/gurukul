import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import WelcomeScreen from "./components/containers/welcome";
import Navbar from "./components/containers/navbar";
import Mobilenav from "./components/containers/mobilenav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Physics Bro",
  description: "Designed & Developed by Vishal Rajdeep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} sm:h-screen max-sm:h-svh antialiased`}
      >
        <WelcomeScreen />

        {/* Navbar visible on md and above */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* MobileNav visible below md */}
        <div className="block md:hidden">
          <Mobilenav />
        </div>
        
          {children}
        
      </body>
    </html>
  );
}