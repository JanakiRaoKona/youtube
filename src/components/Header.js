import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { TiAdjustBrightness } from "react-icons/ti";

const Header = () => {
    const navigate = useNavigate()
    const onClickLogout = () => {
        Cookies.remove("jwt_token");
        navigate('/login');

    }

    return (
        <div className="flex justify-between items-center p-5 bg-lightBg">
            <div>
                <img className="w-28" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="login-logo" />
            </div>
            <div className="flex">
                <TiAdjustBrightness className="text-black m-1 text-4xl cursor-pointer" />
                <img className="w-12 p-2" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" />
                <button type="submit p-2" className="text-lightBlue font-medium w-16 mt-2 h-8 pb-1 rounded border-2 border-lightBlue" onClick={onClickLogout}>Logout</button>

            </div>

        </div>
    )
}

export default Header
