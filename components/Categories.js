import Image from 'next/image'
import React from 'react'

const data = [
    {
        image: "/assets/products/electronic-1.png",
        title: "Electronics"
    },
    {
        image: "/assets/products/fashion-1.png",
        title: "Fashion"
    },
    {
        image: "/assets/products/furniture-1.png",
        title: "Furniture"
    },
    {
        image: "/assets/products/household-1.png",
        title: "Households"
    }, {
        image: "/assets/products/baby-1.png",
        title: "Baby & Kids"
    },
    {
        image: "/assets/products/beauty-1.png",
        title: "Beauty & Personal"
    }, {
        image: "/assets/products/health-1.png",
        title: "Health & Fitness"
    }
]

export default function Categories({ classes }) {
    return (
        <div className={`flex flex-wrap justify-center items-center gap-3 ${classes}`}>
            {data.map((itmes) => {
                return <div key={itmes.title} className='w-[11rem] h-[11rem] flex flex-col justify-center items-center bg-gray-100 rounded-md shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
                    <Image src={itmes.image} alt={itmes.image} width={100} height={100} />
                    <h2 className='text-center mt-2'>{itmes.title}</h2>
                </div>
            })}
        </div>
    )
}
