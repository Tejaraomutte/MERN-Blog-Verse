import NavBar from "./NavBar"
import { Mail } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Link } from "react-router-dom";

function Login() {

    return (
        <>
          <NavBar/>
            <div className="flex flex-col items-center justify-center bg-blue-50 ">
              
                <form className="flex flex-col border-1 sm:w-[70%] lg:w-1/3 py-3 mt-10 rounded-2xl items-center gap-5 bg-white min-he" >
                    <h1 className="font-bold text-2xl ">Sign In</h1>
                    <h4 className="text-semibold">Access your account</h4>
                    <div className="w-[90%] flex flex-col gap-3">
                        <p className="text-md text-gray-600 font-semibold">Email:</p>
                        <div className='relative'>
                        <input type="email" placeholder="Sample@gmail.com" className=" pl-12 border-1 w-full border-gray-300 py-2 rounded-4xl px-2 focus:outline-none focus:border-gray-700" />
                        <Mail className="absolute top-2 left-3  stroke-gray-500"/>
                        </div>

                    </div>
                    <div className="w-[90%] flex flex-col gap-3 relative ">
                        <p className="text-md text-gray-600 font-semibold">Password:</p>
                        <div className='relative'>
                        <input type="password" placeholder="sample123 " className=" pl-12 border-1 w-full border-gray-300 py-2 rounded-4xl px-2 focus:outline-none focus:border-gray-700" />
                        <LockKeyhole className="absolute top-2 left-3  stroke-gray-500" />
                        </div>
                    </div>
                    <div className="flex gap-40 w-[90%]">
                        <div className="flex">
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <p className="text-blue-400 font-semibold  hover:underline cursor-pointer">Forget password?</p>
                    </div>
                    <div className="w-[90%] border-1 bg-blue-500 rounded-4xl px-2 py-3 text-center  hover:bg-blue-700">
                        <p className="text-white">Sign In</p>
                    </div>

                    <div className="border-1 border-gray-200 w-[90%]"></div>
                    <p>
                        Don't have an account?<Link to="/signup" className="text-blue-400 font-semibold hover:underline cursor-pointer">Create One here</Link>
                    </p>
                </form>
            </div>
        </>
    )
}
export default Login