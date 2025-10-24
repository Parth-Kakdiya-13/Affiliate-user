"use client"


import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function Navbar() {

    const [toggle, setToggle] = useState(false)



    return (
        <header>
            <div className="flex justify-between px-20 pt-5 max-md:hidden">
                <ul className="flex items-center gap-3 text-gray-500 text-sm">
                    <Link href={"/"}>FAQ</Link>|
                    <Link href={"/"}>My account</Link>|
                    <Link href={"/"}>About us</Link>|
                    <Link href={"/"}>Contact</Link>
                </ul>
                <ul className="flex items-center gap-3 text-gray-500 text-sm relative ">
                    <li className="group flex items-center gap-1 cursor-pointer ">
                        English
                        <svg className="rotate-90 " xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24"><path fill="currentColor" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
                        <div className="group-hover:block hidden absolute top-5 right-14 z-50 border shadow-2xl border-gray-300 p-2 rounded-md ">
                            <div>Spain</div>
                            <div>French</div>
                            <div>German</div>
                        </div>
                    </li>
                    <li className="group flex items-center gap-1 cursor-pointer">
                        USD
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24"><path fill="currentColor" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
                        <div className="group-hover:block hidden absolute top-5 z-50 border shadow-2xl border-gray-300 p-2 rounded-md -right-3">
                            <div>USD</div>
                            <div>INR</div>
                            <div>Pound</div>
                        </div>
                    </li>
                </ul>
            </div>
            <nav className="flex flex-col items-center justify-center p-5">
                <div className="w-full flex justify-between px-5">
                    <Link href={"/"} className="cursor-pointer md:hidden">
                        <Image width={100} height={100} className="mr-10" src="/assets/fintook.svg" alt="fintook logo" />
                    </Link>
                    <div className="md:hidden relative z-50">
                        {!toggle && <svg className="" xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(!toggle)} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" /></svg>}
                        {toggle && <svg className="" xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(!toggle)} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" /></svg>}
                    </div>
                </div>
                <ul
                    className={`max-md:z-40 flex flex-col md:flex-row md:items-center md:justify-center gap-5 max-md:p-10 text-gray-700 font-medium text-base absolute md:static top-0 left-0 w-full h-screen md:h-auto bg-white transition-all duration-500 ease-in-out ${toggle ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                        }`}
                >
                    <Link href={"/"} className="cursor-pointer max-md:hidden" onClick={() => setToggle(false)}>
                        <Image width={100} height={100} className="mr-10" src="/assets/fintook.svg" alt="fintook logo" />
                    </Link>
                    <Link href="/category" className="flex items-center gap-2 cursor-pointer" onClick={() => setToggle(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18ZM2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6Z" /></svg>
                        All Categories
                    </Link>
                    <div className="flex max-md:hidden ">
                        <input type="search" className="p-2 w-full md:w-md border border-gray-400 rounded-l-md" name="" id="" placeholder="Search Your Favourite Products" />
                        <button className="flex justify-center p-2 text-white border border-lime-400 cursor-pointer rounded-r-md items-center bg-lime-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6" /></svg>
                        </button>
                    </div>
                    <Link href={"/likelist"} className="flex items-center gap-3 cursor-pointer" onClick={() => setToggle(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81" /></svg>
                        <p className="">Recorded<br /> Wishlist</p>
                    </Link>
                    <svg className="max-md:rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="m14.5 3.5l.354.354a.5.5 0 0 0 0-.708zm-14 8l-.354-.354a.5.5 0 0 0 0 .708zM11.146.854l3 3l.708-.708l-3-3zm3 2.292l-3 3l.708.708l3-3zm-10.292 11l-3-3l-.708.708l3 3zm-3-2.292l3-3l-.708-.708l-3 3zM.5 12h11v-1H.5zM15 8.5V7h-1v1.5zM11.5 12A3.5 3.5 0 0 0 15 8.5h-1a2.5 2.5 0 0 1-2.5 2.5zm3-9h-11v1h11zM0 6.5V8h1V6.5zM3.5 3A3.5 3.5 0 0 0 0 6.5h1A2.5 2.5 0 0 1 3.5 4z" /></svg>
                    <Link href={"/signup"} className="flex items-center gap-3 cursor-pointer" onClick={() => setToggle(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="4" /><path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" /></g></svg>
                        <p>Sign up</p>
                    </Link>
                </ul>
                <div className="flex md:hidden max-md:py-5">
                    <input type="search" className="p-2 w-full md:w-md border border-gray-400 rounded-l-md" name="" id="" placeholder="Search Your Favourite Products" />
                    <button className="flex justify-center p-2 text-white border border-lime-400 cursor-pointer rounded-r-md items-center bg-lime-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6" /></svg>
                    </button>
                </div>
                <p className="text-sm text-gray-500 mt-5 text-center">Welcome to Fintook - India's Trusted Coupons, Offers & Cashback Website</p>
            </nav>
        </header>
    )
}