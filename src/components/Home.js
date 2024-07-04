/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Loading from './Loading'
import Videos from './Videos'
import { BsSearch } from 'react-icons/bs';

const Home = () => {
    const [videosList, setVideosList] = useState([]);
    const [showBanner, setShowBanner] = useState(true)
    const [searchInput, setSearchInput] = useState('')

    const onChangeSearchInput = (event) => {
        setSearchInput(event.target.value);

    }
    const onClickSearchInput = () => {
        getAllVideos();
    }

    useEffect(() => {
        getAllVideos()

    }, [])

    const handleBanner = () => {
        setShowBanner(!showBanner)

    }

    const getAllVideos = async () => {
        const jwt_token = Cookies.get('jwt_token');
        const ALL_VIDEOS_API = "https://apis.ccbp.in/videos/all?search=" + searchInput;
        const options = {
            headers: {
                Authorization: `Bearer ${jwt_token}`
            }
        }
        const response = await fetch(ALL_VIDEOS_API, options);
        const jsonData = await response.json();
        setVideosList(jsonData.videos);
    }

    if (videosList.length === 0) {
        return <Loading />
    }
    return (
        <div>
            {showBanner && <div className="banner-parant relative m-2">
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png" alt="banner" />
                </div>
                <div>
                    <div className="absolute top-5 left-5">
                        <img className="w-28" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="login-logo" />
                        <div>
                            <p>Buy Nxt Watch Premium prepaid plans with<br />
                                UPI
                            </p>
                            <button className="border w-32 h-10 rounded">GET IT NOW</button>
                        </div>
                    </div>
                    <div className="absolute top-1 right-3 text-1xl font-medium">
                        <button type="button" onClick={handleBanner}>X</button>
                    </div>

                </div>
            </div>}
            <div>
                <div className="flex mt-8 border border-gray-300 rounded-md w-[350px] m-2 mb-8">
                    <input
                        type="search"
                        className="flex-grow h-9 p-1.5 bg-transparent outline-none text-black font-roboto font-normal text-base"
                        placeholder="Search"
                        value={searchInput}
                        onChange={onChangeSearchInput}
                    />
                    <button
                        type="button"
                        data-testid="searchButton"
                        className="bg-slate-400 w-[50px] flex justify-center items-center h-9 outline-none border-none rounded-md cursor-pointer"
                        onClick={onClickSearchInput}
                    >
                        <BsSearch className="text-gray-100" />
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {videosList.map(eachVideo => <Videos key={eachVideo.id} videoList={eachVideo} />)}

            </div>


        </div>
    )
}

export default Home
