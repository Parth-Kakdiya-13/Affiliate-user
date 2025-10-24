"use client"

import Image from "next/image";
import { useState } from "react";

export default function Carousel() {
    const slides = [
        "/assets/carousel-images/slider-01.jpg",
        "/assets/carousel-images/slider-02.jpg",
        "/assets/carousel-images/slider-03.jpg",
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % slides.length);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[500px] w-full  lg:w-5xl  mx-auto rounded-xl mt-20">
            <div className="absolute top-30 left-20 z-20">
                <div>
                    <div>
                        <h4>Bevesi Natural Foods</h4>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mt-5">Have your groceries <br /> delivered at any time</h2>
                        <div className="py-5">
                            <p className="w-full md:w-lg text-gray-500 font-semibold">We have prepared the most special discounts for you on the most popular products you need. Don't miss these opportunities...</p>
                        </div>
                    </div>
                    <div >
                        <button className="bg-white px-5 py-3 font-bold rounded-md cursor-pointer">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <Image
                src={slides[current]}
                alt={`Slide ${current + 1}`}
                fill
                className="relative object-cover transition-all duration-700"
                priority
            />

            <button
                onClick={prevSlide}
                className="flex justify-center items-center cursor-pointer absolute rotate-180 w-10 h-10 left-3 z-30 top-1/2 -translate-y-1/2 shadow-2xl bg-white text-black px-3 py-2 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"><path fill="currentColor" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
            </button>
            <button
                onClick={nextSlide}
                className="flex justify-center items-center cursor-pointer absolute w-10 h-10 right-3 top-1/2 z-30 -translate-y-1/2 shadow-2xl bg-white text-black px-3 py-2 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"><path fill="currentColor" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
            </button>
        </div>
    );
}
