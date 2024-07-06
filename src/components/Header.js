import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { activeDarkMode } from '../utlis/darkModeSlice';

const Header = () => {
    const darkMode = useSelector(store => store?.darkmode);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickLogout = () => {
        Cookies.remove("jwt_token");
        navigate('/login');
    };

    const toggleDarkMode = () => {
        dispatch(activeDarkMode(!darkMode));
    };




    return (
        <div className={`flex justify-between items-center p-5 bg-lightBg ${!darkMode && "bg-zinc-800"}`}>
            <div>
                <img className="w-28" src={darkMode ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"} alt="login-logo" />
            </div>
            <div className="flex">
                <button onClick={toggleDarkMode}>{darkMode ? <IoMoon className="text-black m-1 mt-3 text-2xl cursor-pointer" /> : <FiSun className="text-white m-1 mt-3 text-2xl cursor-pointer" />}</button>
                <img className="w-12 p-2" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" />
                <button type="submit" className={`text-lightBlue font-medium w-16 mt-2 h-8 pb-1 rounded border-2 border-lightBlue ${!darkMode && "text-white border-slate-100"}`} onClick={onClickLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Header;
