import Image from "next/image";



const storesData = [
    {
        image: "/assets/stores/flipcart.png",
        alt: "flipcart"
    },
    {
        image: "/assets/stores/ajio.png",
        alt: "ajio"
    },
    {
        image: "/assets/stores/myntra.png",
        alt: "myntra"
    },
    {
        image: "/assets/stores/dell.png",
        alt: "dell"
    },
    {
        image: "/assets/stores/hp.png",
        alt: "hp"
    },
    {
        image: "/assets/stores/croma.png",
        alt: "croma"
    },
    {
        image: "/assets/stores/firstcry.png",
        alt: "firstcry"
    }

]

export default function Stores() {



    return (
        <div className="p-10 md:px-36 mt-20">
            <h2 className="text-2xl font-bold"><span className="text-lime-500">Top</span> Stores</h2>
            <div className="flex max-lg:flex-col justify-center items-center gap-5 p-10 rounded-md bg-lime-900/20 mt-5">
                <div className="h-full bg-white rounded-md border-2 border-gray-300 shadow-2xl">
                    <Image src={"/assets/stores/amazon.png"} width={500} height={500} alt={"amazon"} className="w-fit h-fit bg-white rounded-md" />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5">
                    {storesData.map((img) => {
                        return <div key={img.alt} className="bg-white w-44 h-44 flex justify-center items-center border-2 border-gray-300 rounded-md  shadow-2xl">
                            <Image src={img.image} width={100} height={100} alt={img.alt} className="w-fit h-fit bg-white rounded-md" />
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}