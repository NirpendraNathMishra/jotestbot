"use client"
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import Login from "@/Components/login";
function Header(){
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link></link>
            </Head>
            <main className="bg-white px-10 md:px-10 lg:px-20 dark:bg-sky-950" style={{
                backgroundImage: darkMode ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' : '',
                backgroundSize: "center",
                backgroundPosition: 'center',
            }}>
                <section className="min-h-screen">
                    <nav className='py-1 mb-12 flex justify-between'>
                        <h1 className={`text-xl font-goolefonts bold ${darkMode ? "text-white" : "text-black"} `}>Devloped With ❤️ By Nirpendra</h1>
                        <ul className="flex items-center">
                            <li>

                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
                            </li>
                        </ul>
                    </nav>
                    <div className={`text-center p-1 ${darkMode ? "text-white" : "text-black"} `}>

                        <h1 className={`text-5xl py-1 ${darkMode ? "text-white" : "text-black"} `}>Jio Testcase Gen Bot </h1>
                        <br></br>
                        <h3 className={`text-2xl py-1 ${darkMode ? "text-white" : "text-black"} `}> Interns Project At Jio Platforms Limited  </h3>
                        <p className={`text-md py-1 leading-1 ${darkMode ? "text-white" : "text-black"} `}>Welcome to my bot that uses the Chat-GPT API to Genrate test case  😊 </p>
                        <br></br>
                    </div>
                    <Login/>


                    <div className={`text-5xl flex justify-center gap-10 py-3 mr-auto ${darkMode ? "text-white" : "text-gray-600"} `}>
                        <AiFillGithub className="text-2xl" href={"https://github.com/NirpendraNathMishra"}/>
                        <AiFillLinkedin className="text-2xl" href={"https://www.linkedin.com/in/nripendra-nath-mishra-19a49717a"}/>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className={`text-xl  flex justify-center font-goolefonts py-2 ${darkMode ? "text-white" : "text-black"} `}>Devloped With ❤️ By Nirpendra Mishra And Mayank Sethi</h1>
                </section>
            </main>
        </div>
    )
}

export default Header;
