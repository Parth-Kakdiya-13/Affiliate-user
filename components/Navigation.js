import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const dataset = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    }]

export default function Navigation() {
    return (
        <div className='relative flex items-center justify-between p-5 border-t border-b border-gray-300 max-md:hidden'>
            <ul className='flex items-center gap-8'>
                <li className='text-sm text-gray-500'>Get Best Discounts & <br /> Offers on time</li>
                <li className='text-gray-500'>
                    <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="currentColor" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z" /></svg>
                </li>
                <Link href={"/"}>Home</Link>
                <Link href={"/category"}>Electronics</Link>
                <Link href={"/category"}>Home & Furniture</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/blog"}>Blog</Link>
            </ul>
            <div className='flex items-center gap-2 text-xl'>
                <div className='group'>
                    <h3 className='cursor-pointer'>Today's Deal</h3>
                    <div className='group-hover:block hidden absolute z-50 p-5 bg-white top-0  left-0  w-full h-fit border border-gray-300 shadow-2xl '>
                        <div className=' flex justify-center flex-wrap gap-3'>
                            {dataset.map((product) => (
                                <div key={product.id} className="w-xs relative z-40 flex flex-col justify-between border border-transparent hover:border-gray-300 hover:shadow-2xl p-5 rounded-md  transition-all duration-300 ease-in-out">
                                    <span className="text-black absolute top-3 right-3 z-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" /></svg>
                                    </span>
                                    <div className="flex flex-col">
                                        <Image src={product.image} width={50} height={50} alt={product.title} loading="lazy" className="object-contain w-full h-48" />
                                        <p className="font-bold mt-1 text-lime-500 text-xl">${product.price}</p>
                                        <h3 className="font-medium mt-2 text-sm text-gray-500 w-xs">{product.title}</h3>
                                        <p className="text-sm flex items-center gap-1 py-2 font-semibold">{product.rating.rate}<svg className="text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" /></svg></p>
                                        {/* <p className="text-sm text-gray-600">{product.description}</p> */}
                                    </div>
                                    <button className="w-fit border rounded-md cursor-pointer hover:bg-black hover:text-white font-bold px-3 py-1">Shop now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <svg className="rotate-90 " xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 24"><path fill="currentColor" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
            </div>
        </div>
    )
}
