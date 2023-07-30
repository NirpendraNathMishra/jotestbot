import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import {darkMode} from "../../tailwind.config";

export default function Login() {
    
    return (
        <div className={'h-auto w-1/5  mx-auto drop-shadow-md hover:drop-shadow-2xl ${darkMode ? "text-black" : "text-white"}'}>
            <h2 className={`text-3xl font-medium flex justify-center ${darkMode ? "text-white" : "text-black"} animate-typing`}>Join today</h2>
            <div className="py-1">
                <h3 className={`py-1 flex justify-center ${darkMode ? "text-white" : "text-black"} animate-typing`}>Sign in with one of the providers</h3>
                <br />
                <div className="flex flex-col gap-4 ">
                    <button
                        //onClick={GoogleLogin}
                        className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 "
                    >
                        <FcGoogle className="text-2xl" />
                        Sign in with Google
                    </button>
                    <button
                        className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 "
                        //onClick={FacebookProvider}
                    >
                        <AiFillFacebook className="text-2xl text-blue-300" />
                        Sign in with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}