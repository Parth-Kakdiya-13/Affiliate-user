import Link from "next/link";

export default function LikeList() {


    return (
        <div className="">
            <nav className="pl-10 md:pl-36">
                <ul className="flex gap-3 items-center text-gray-400 text-sm font-normal">
                    <Link href={"/"} className="hover:text-black">Home</Link>
                    <li className="rotate-180 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z" /></svg>
                    </li>
                    <li className="text-black">Like Lists</li>
                </ul>
            </nav>
            <h2 className="text-center font-normal py-30">Like Products to add in Like list.</h2>
        </div>
    )
}