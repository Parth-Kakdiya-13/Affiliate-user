"use client"

import { useState } from "react"

export default function Sidebar({ onGetCategoey }) {

    const [toggleElectronic, setToggleElectronic] = useState(false)
    const [toggleFashion, setToggleFashion] = useState(false)
    const [toggleJewellery, setToggleJewellery] = useState(false)

    return (
        <div className="p-5 w-full">
            <h2 className='text-lg font-bold'><span className='text-lime-500 '>Product</span> Categories</h2>
            <div className="mt-5 text-md font-light text-black">
                <div className="">
                    <h3 className=" flex justify-between items-center p-2 cursor-pointer" onClick={() => { setToggleElectronic(!toggleElectronic); onGetCategoey("electronics") }}><p className="cursor-pointer">Electronics</p><span className="font-normal cursor-pointer text-gray-400" onClick={() => setToggleElectronic(!toggleElectronic)}>{toggleElectronic ? "-" : "+"}</span></h3>
                    <ul className={`text-gray-500 pl-5 flex flex-col items-start ${toggleElectronic ? "block" : "hidden"}`}>
                        <li className="hover:text-black cursor-pointer">Camera</li>
                        <li className="hover:text-black cursor-pointer">Smart Phone</li>
                        <li className="hover:text-black cursor-pointer">Laptom & Computers</li>
                        <li className="hover:text-black cursor-pointer">Tvs, Audio-Video</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className=" flex justify-between items-center p-2 cursor-pointer" onClick={() => { setToggleFashion(!toggleFashion); }}><p className="cursor-pointer">Fashion</p><span className="font-normal cursor-pointer text-gray-400" onClick={() => setToggleFashion(!toggleFashion)}>{toggleFashion ? "-" : "+"}</span></h3>
                    <ul className={`text-gray-500 pl-5 flex flex-col items-start ${toggleFashion ? "block" : "hidden"}`}>
                        <li className="hover:text-black cursor-pointer" onClick={() => onGetCategoey("women's clothing")}>Women's Clothes</li>
                        <li className="hover:text-black cursor-pointer" onClick={() => onGetCategoey("men's clothing")}>Men's Clothes</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className=" flex justify-between items-center p-2 cursor-pointer" onClick={() => { setToggleJewellery(!toggleJewellery); onGetCategoey("jewelery") }}><p className="cursor-pointer">Jewellery</p><span className="font-normal cursor-pointer text-gray-400" onClick={() => setToggleJewellery(!toggleJewellery)}>{toggleJewellery ? "-" : "+"}</span></h3>
                    <ul className={`text-gray-500 pl-5 flex flex-col items-start ${toggleJewellery ? "block" : "hidden"}`}>
                        <li className="hover:text-black cursor-pointer">Earings</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
