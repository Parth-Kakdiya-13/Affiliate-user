import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className=''>
            <div className='p-5 pt-10 flex max-sm:flex-col max-sm:gap-5 items-center justify-around border-t border-gray-300'>
                <Image src={"/assets/fintook.svg"} width={100} height={100} alt='logo' />
                <div className='flex items-center'>
                    <input type='search' className='p-2 rounded-l-md border border-gray-300 w-full md:w-lg ' placeholder='Enter your Email' />
                    <button className='px-5 py-2 bg-lime-500 rounded-r-md border border-lime-500 cursor-pointer font-bold '>Send</button>
                </div>
            </div>
            <div className='flex justify-around items-start p-5 max-md:flex-col max-md:gap-5 max-md:flex-wrap'>
                <ul className='flex flex-col gap-3 text-gray-500'>
                    <li className='text-xl font-semibold text-black'>Quick Links</li>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/category"}>All Categories</Link>
                    <Link href={"/likelist"}>Like lists</Link>
                    <Link href={"/login"}>Login</Link>
                    <Link href={"/signup"}>Signup</Link>
                </ul>
                <ul className='flex flex-col gap-3 text-gray-500'>
                    <li className='text-xl font-semibold text-black'>Help & support</li>
                    <li>FAQs</li>
                    <li>How it works</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
                <ul className='flex flex-col gap-3 text-gray-500'>
                    <li className='text-xl font-semibold text-black'>Get to Know Us</li>
                    <li>Careers for Bevesi</li>
                    <li>About Bevesi</li>
                    <li>Inverstor Relations</li>
                    <li>Bevesi Devices</li>
                    <li>Customer reviews</li>
                    <li>Social Responsibility</li>
                </ul>
                <ul className='flex flex-col gap-5 text-gray-500'>
                    <li className='text-xl font-semibold text-black'>Download</li>
                    <li>You can download our mobile application <br />from app stores</li>
                    <li>
                        <div className='flex items-center gap-3'>
                            <Image src={"/assets/google-play-button-dark.png"} width={100} height={100} alt='play store' />
                            <p>Download App Get -10% Discount</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center gap-3'>
                            <Image src={"/assets/apple-store-button-dark.png"} width={100} height={100} alt='app store' />
                            <p>Download App Get -10% Discount</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ul className='flex items-center gap-5'>
                                <li className='shadow-2xl shadow-gray-800 border border-gray-300 w-fit text-blue-500 rounded-full p-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                                </li>
                                <li className='shadow-2xl shadow-gray-800 border border-gray-300 w-fit text-pink-500 rounded-full p-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
                                </li>
                                <li className='shadow-2xl shadow-gray-800 border border-gray-300 w-fit text-red-500 rounded-full p-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" /></svg>
                                </li>
                                <li className='shadow-2xl shadow-gray-800 border border-gray-300 w-fit text-red-800 rounded-full p-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7z" /></svg>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
