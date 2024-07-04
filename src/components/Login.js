import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const userNames = useRef(null);
    const passwords = useRef(null);

    useEffect(() => {
        const jwtToken = Cookies.get("jwt_token");
        if (jwtToken) {
            navigate('/');
        }
    }, [navigate]);

    const showHidePassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmitSuccess = (jwtToken) => {
        Cookies.set("jwt_token", jwtToken, { expires: 30 });
        navigate('/');
    }

    const submitForm = async event => {
        event.preventDefault();
        const { username, password } = { username: userNames.current.value, password: passwords.current.value };
        const userDetails = { username, password };

        const url = 'https://apis.ccbp.in/login';
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
        };
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {
            onSubmitSuccess(data.jwt_token);
        } else {
            setErrorMessage(data.error_msg);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="shadow-lg p-10 rounded">
                <form onSubmit={submitForm}>
                    <div className="flex justify-center mb-3">
                        <img className="w-28" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="login-logo" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="userName" className="text-slate-400 text-sm mb-1 font-medium">USERNAME</label>
                        <input ref={userNames} id="userName" className="border-2 outline-none rounded p-1" type="text" placeholder="Username" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-slate-400 text-sm mb-1 mt-2 font-medium">PASSWORD</label>
                        <input ref={passwords} id="password" className="border-2 outline-none rounded p-1" type={showPassword ? "text" : "password"} placeholder="Password" />
                    </div>
                    <div>
                        <input type="checkbox" className="h-3 w-3 cursor-pointer" onClick={showHidePassword} />
                        <label htmlFor="showPassword" className="text-slate-400 text-sm mb-1 font-medium m-1">Show Password</label>
                    </div>
                    <button type="submit" className="bg-customBlue text-white w-48 mt-2 h-8 pb-1 rounded">Login</button>
                    {errorMessage && <p className="text-errorRed text-xs">*{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
