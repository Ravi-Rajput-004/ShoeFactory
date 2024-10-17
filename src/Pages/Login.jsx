import React, { useState } from "react";

import { Link } from "react-router-dom";


function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    async function submit(e) {
        e.preventDefault(); // no reload the page





        // axios.post('http://localhost:5173/', { userName, password })
        //     .then((response) => {
        //         console.log(response)
        //     }).catch((e) => {
        //         console.log(e)
        //     })
    }

    return (

        <div className="h-screen flex flex-col justify-between">
            {/* <Navbar /> */}
            <form
                action="POST"
            >
                <div className="flex h-full flex-col justify-center items-center ">
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        className=" w-[30%] h-12 m-2"
                        placeholder="Username"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className=" w-[30%] h-12 m-2"
                        placeholder="Password"
                    />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button
                        type="submit"
                        onClick={submit}
                        className="bg-black px-8 py-2 text-white flex justify-center items-center"
                    >
                        Login
                    </button>
                    <Link
                        to="/register"
                        className="bg-black px-8 py-2 text-white flex justify-center items-center"
                    >
                        Register
                    </Link>
                </div>
            </form>
            {/* <Footer /> */}
        </div>
    );
}

export default Login;
