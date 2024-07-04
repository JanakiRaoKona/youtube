import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Loading from './Loading'
import Videos from './Videos'

const Trending = () => {
    const [videosList, setVideosList] = useState([]);

    useEffect(() => {
        getAllVideos()

    }, [])

    const getAllVideos = async () => {
        const jwt_token = Cookies.get('jwt_token');
        const ALL_VIDEOS_API = "https://apis.ccbp.in/videos/trending";
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
            <h1>Trending Videos</h1>
            <div className="flex flex-wrap">
                {videosList.map(eachVideo => <Videos key={eachVideo.id} videoList={eachVideo} />)}

            </div>
        </div>
    )
}

export default Trending
