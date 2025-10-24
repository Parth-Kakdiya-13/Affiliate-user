import Link from "next/link";

export default function LoginPage() {



    return (
        <div>
            <nav className="pl-10 md:pl-36">
                <ul className="flex gap-3 items-center text-gray-400 text-sm font-normal">
                    <Link href={"/"} className="hover:text-black">Home</Link>
                    <li className="rotate-180 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z" /></svg>
                    </li>
                    <li className="text-black">Login</li>
                </ul>
            </nav>
            <form className="flex flex-col justify-center items-start gap-3 w-fit mx-auto shadow-2xl p-10 px-20 rounded-md m-20">
                <h2 className="text-xl font-semibold"><span className="text-lime-500">Login</span> to Fintook</h2>
                <input type="email" className="border border-gray-300 p-2 rounded-md" placeholder="Email" />
                <input type="password" className="border border-gray-300 p-2 rounded-md" placeholder="Passoword" />
                <button className="px-5 py-2 bg-lime-500 rounded-md">Log in</button>
                <Link href="/signup" className="text-sm text-gray-500">Don't have an account</Link>
            </form>
        </div>
    )
}