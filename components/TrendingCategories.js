"use client"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function TrendingCategories() {

    const [dataset, setDataSet] = useState([]);
    const [category, setCategory] = useState("electronics");

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
        <div className="p-10 md:px-36 mt-20">
            <h2 className="text-2xl font-bold"><span className="text-lime-500">Trending</span> Categories</h2>
            <div className="mt-5 flex gap-3 font-semibold max-md:flex-col">
                <button className={`px-2 py-1 ${category === "electronics" ? "border border-lime-500 text-lime-500" : "border border-gray-300"}  hover:border-black rounded-full cursor-pointer`} onClick={() => categoryChangeHandler("electronics")}>Electronics</button>
                <button className={`px-2 py-1 ${category === "women's clothing" ? "border border-lime-500 text-lime-500" : "border border-gray-300"}  hover:border-black rounded-full cursor-pointer`} onClick={() => categoryChangeHandler("women's clothing")}>Women's Clothes</button>
                <button className={`px-2 py-1 ${category === "men's clothing" ? "border border-lime-500 text-lime-500" : "border border-gray-300"}  hover:border-black rounded-full cursor-pointer`} onClick={() => categoryChangeHandler("men's clothing")}>Men's Clothes</button>
                <button className={`px-2 py-1 ${category === "jewelery" ? "border border-lime-500 text-lime-500" : "border border-gray-300"}  hover:border-black rounded-full cursor-pointer`} onClick={() => categoryChangeHandler("jewelery")}>Jewellery</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                {dataset.map((product) => (
                    <div key={product.id} className="relative z-40 flex flex-col justify-between border border-transparent hover:border-gray-300 hover:shadow-2xl p-5 rounded hover:scale-105 transition-all duration-300 ease-in-out">
                        <span className="text-black absolute top-3 right-3 z-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" /></svg>
                        </span>
                        <div className="flex flex-col">
                            <Image src={product.image} width={200} height={200} alt={product.title} loading="lazy" className="object-contain w-full h-48" />
                            <p className="font-bold mt-1 text-lime-500 text-xl">${product.price}</p>
                            <h3 className="font-medium mt-2 text-gray-500">{product.title}</h3>
                            <p className="text-sm flex items-center gap-1 py-2 font-semibold">{product.rating.rate}<svg className="text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" /></svg></p>
                            {/* <p className="text-sm text-gray-600">{product.description}</p> */}
                        </div>
                        <button className="border rounded-md cursor-pointer hover:bg-black hover:text-white font-bold px-3 py-1">Shop now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
