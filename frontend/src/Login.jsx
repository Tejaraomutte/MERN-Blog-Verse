import NavBar from "./NavBar"
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
function Login() {
    
    return (
        <>
          <NavBar/>
            <div className="flex flex-col items-center justify-center bg-blue-50 ">
              
                <form className="flex flex-col border-1 w-1/3 py-3 mt-10 rounded-2xl items-center gap-5 bg-white min-he" >
                    <h1 className="font-bold text-2xl ">Sign In</h1>
                    <h4 className="text-semibold">Access your account</h4>
                    <div className="w-[90%] flex flex-col gap-3">
                        <p className="text-md text-gray-600 font-semibold">Email:</p>
                        <input type="email" placeholder="Sample@gmail.com" className="border-1 w-full border-gray-300 py-2 rounded-4xl px-2 focus:outline-none focus:border-gray-700" />

                    </div>
                    <div className="w-[90%] flex flex-col gap-3 relative ">
                        <p className="text-md text-gray-600 font-semibold">Email:</p>
                        <input type="password" placeholder="sample123 " className="border-1 w-full border-gray-300 py-2 rounded-4xl px-2 focus:outline-none focus:border-gray-700" />
                        <p className="absolute bottom-3 right-3">👁</p>
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
                        Don't have an account?<span className="text-blue-400 font-semibold hover:underline cursor-pointer">Create One here</span>
                    </p>
                </form>
            </div>
        </>
    )
}
export default Login