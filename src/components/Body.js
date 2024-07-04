import Header from "./Header"
import { Outlet } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { CiSaveDown1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import React from "react";

const Body = () => {



    return (
        <div className="bg-lightBg h-screen">
            <div>
                <Header />
            </div>
            <div className="flex bg-lightBg">
                <div className="flex flex-col justify-start items-start w-1/6">
                    <Link to="/" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><div className="flex justify-center mb-2 items-center">
                        <AiFillHome className="mr-2 w-10 text-red text-xl" />
                        <button className="font-medium text-base">Home</button>
                    </div>
                    </Link>
                    <Link to="/trending" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        <div className="flex justify-center items-center mb-2">
                            <IoIosTrendingUp className="mr-2 w-10 text-red text-xl" />
                            <button className="font-medium text-base">Trending</button>
                        </div>
                    </Link>
                    <Link to="/gaming" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        <div className="flex justify-center items-center mb-2">
                            <SiYoutubegaming className="mr-2 w-10 text-red text-xl" />
                            <button className="font-medium text-base">Gaming</button>
                        </div>
                    </Link>
                    <Link to="/saved-videos" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                        <div className="flex justify-center items-center mb-2">
                            <CiSaveDown1 className="mr-2 w-10 text-red text-xl" />
                            <button className="font-medium text-base">Saved Videos</button>
                        </div>
                    </Link>


                </div>
                <div className="bg-videos w-5/6 p-2">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default Body
