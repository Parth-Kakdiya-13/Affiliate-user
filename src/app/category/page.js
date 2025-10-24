"use client"

import Link from "next/link";
import Categories from "../../../components/Categories";
import Navbar from "../../../components/Navrbar";
import Sidebar from "../../../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navigation from "../../../components/Navigation";

export default function CategiryPage() {


    const [dataset, setDataSet] = useState([]);
    const [category, setCategory] = useState("electronics");
    const [likeButton, setLikeButton] = useState(false);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        async function fetchDatahandler() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
                if (response.status === 200) {
                    setDataSet(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchDatahandler()
    }, [category])

    function categoryChangeHandler(category) {
        setCategory(category)
    }


    return (
        <div>
            <div className="p-5 border-b border-gray-200">
                <nav className="pl-10 md:pl-36">
                    <ul className="flex gap-3 items-center text-gray-400 text-sm font-normal">
                        <Link href={"/"} className="hover:text-black">Home</Link>
                        <li className="rotate-180 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z" /></svg>
                        </li>
                        <li className="text-black">Categories</li>
                    </ul>
                </nav>
                <Categories classes={"mt-5"} />
            </div>
            <div className="px-5 md:px-10 flex relative">
                <button className="md:hidden w-fit h-fit flex justify-center items-center p-2 rounded-r-md bg-green-800 text-white  absolute top-3 left-0" onClick={() => setToggle(!toggle)}>
                    <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="48" d="m112 244l144-144l144 144M256 120v292" /></svg>
                </button>
                {/* <div className={`w-md md:w-lg border-r border-gray-300 h-auto relative max-md:absolute max-md:-left-full bg-white z-50 ${toggle ? "left-0" : "-left-full"}`}> */}
                <div className={`max-md:z-50 flex flex-col md:flex-row md:items-start md:justify-between gap-5 max-md:p-10 text-gray-700 font-medium text-base absolute md:static top-0 left-0 w-sm max-md:h-full border-r border-gray-300 md:h-auto bg-white transition-all duration-500 ease-in-out ${toggle ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}>
                    <svg className="md:hidden absolute top-3 right-3" xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(!toggle)} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" /></svg>
                    <Sidebar onGetCategoey={categoryChangeHandler} />
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
                    {dataset.map((product) => (
                        <div key={product.id} className="relative flex flex-col justify-between border border-transparent hover:border-gray-300 hover:shadow-2xl p-5 rounded hover:scale-105 transition-all duration-300 ease-in-out">
                            {!likeButton && <svg className="absolute top-3 cursor-pointer right-3 z-40" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={() => setLikeButton(!likeButton)}><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" /></svg>}
                            {likeButton && <svg className="absolute top-3 cursor-pointer right-3 z-40" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={() => setLikeButton(!likeButton)}><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" /></svg>}
                            <div className="flex flex-col">
                                <Image src={product.image} width={200} height={200} alt={product.title} loading="lazy" className="object-contain w-full h-48" />
                                <p className="font-bold mt-1 text-lime-500 text-xl">${product.price}</p>
                                <h3 className="font-medium text-sm mt-2 text-gray-500">{product.title}</h3>
                                <p className="text-sm flex items-center gap-1 py-2 font-semibold">{product.rating.rate}<svg className="text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" /></svg></p>
                                {/* <p className="text-sm text-gray-600">{product.description}</p> */}
                            </div>
                            <button className="border rounded-md cursor-pointer hover:bg-black hover:text-white font-bold px-3 py-1">Shop now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}