"use client"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { useTheme } from 'next-themes'

export default function Navbar() {
    const [navBar, setNavbar] = useState(false);
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    const navBarOff = () => {
        setNavbar(false);
    }

    return (
        <header className="flex h-[50px] w-full items-center md:mt-4 text-base mb-6 md:mb-12 mt-0">
            <button className="block  mr-2 md:hidden" onClick={() => setNavbar(!navBar)}>
                <Image src={`/${!navBar ? "burger-menu" : "cross"} darkmode.svg`} alt="hamburger bar" width={40} height={40} className="block dark:hidden" />
                <Image src={`/${!navBar ? "burger-menu" : "cross"} lightmode.svg`} alt="hamburger bar" width={40} height={40} className="hidden dark:block" />
            </button>
            <Link href="/" className="mr-auto md:mr-0">
                <div className="mb-[-4px] text-base ">Kinczel Balázs</div>
                <div className="text-base">Front-End Developer</div>
            </Link>

            <nav className={`w-auto h-auto ml-auto ${!navBar ? "hidden" : "block"} md:block mt-4 md:mt-0`}>
                <ul className={` gap-2 left-0 items-center justify-center  h-auto py-4 t list-none w-full text-lg absolute md:relative flex-col md:flex-row  flex mt-0 bg-white dark:bg-[#23272f] z-50 top-[74px] md:top-0`}>
                    <Link href="/" className="w-full p-2 px-4 py-2 cursor-pointer active:bg-slate-600 active:bg-opacity-30 md:hover:bg-slate-600 md:hover:rounded-full md:hover:bg-opacity-30" onClick={navBarOff}>Home</Link>
                    <Link href="/Info" className="w-full p-2 px-4 py-2 cursor-pointer active:bg-slate-600 active:bg-opacity-30 md:hover:bg-slate-600 md:hover:rounded-full md:hover:bg-opacity-30" onClick={navBarOff}>Info</Link>
                    <Link href="/Project" className="w-full p-2 px-4 py-2 cursor-pointer active:bg-slate-600 active:bg-opacity-30 md:hover:bg-slate-600 md:hover:rounded-full md:hover:bg-opacity-30" onClick={navBarOff}>Projects</Link>
                    <Link href="/Contact" className="w-full p-2 px-4 py-2 cursor-pointer active:bg-slate-600 active:bg-opacity-30 md:hover:bg-slate-600 md:hover:rounded-full md:hover:bg-opacity-30" onClick={navBarOff}>Contact</Link>
                </ul>
            </nav>

            <button className="flex items-center justify-center p-2 ml-1 rounded-full sm:ml-2 w-autoh-full sm:p-3 sm:hover:bg-slate-600 sm:hover:bg-opacity-30" onClick={changeTheme}>
                <Image src={"/sun-2-svgrepo-com.svg"} alt="change mode" width={30} height={30} className="hidden dark:block"></Image>
                <Image src={"/moon-svgrepo-com.svg"} alt="change mode" width={30} height={30} className="black dark:hidden"></Image>
            </button>
        </header>
    )
}
