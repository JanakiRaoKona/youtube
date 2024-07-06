/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import ReactPlayer from 'react-player';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdDataSaverOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import { addedItems } from '../utlis/savedSlice';
import { activelike, activeUnlike, savedButton } from '../utlis/likeUnlike';

const VideoPlay = () => {
    const { resId } = useParams();
    const darkMode = useSelector(store => store.darkmode);
    const likeToggle = useSelector(store => store.likeunlike);
    const { like, unlike, saveLike } = likeToggle
    console.log(like, unlike, saveLike);

    const [videosList, setVideosList] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        getVideoDetails();

    }, [resId]);

    const handleLike = () => {
        dispatch(activelike(!like))
        dispatch(activeUnlike(false))
    }
    const handleUnLike = () => {
        dispatch(activelike(false))
        dispatch(activeUnlike(!unlike))
    }

    const handleSave = (videosList) => {
        dispatch(savedButton(!saveLike));
        dispatch(addedItems(videosList.video_details));

    }

    async function getVideoDetails() {
        const jwt_token = Cookies.get('jwt_token');
        const ALL_VIDEOS_API = `https://apis.ccbp.in/videos/${resId}`;
        const options = {
            headers: {
                Authorization: `Bearer ${jwt_token}`
            }
        };
        const response = await fetch(ALL_VIDEOS_API, options);
        const jsonData = await response.json();
        setVideosList(jsonData);
    }

    if (!videosList) return null;

    const { title, view_count, published_at, video_url, channel, description } = videosList.video_details;

    return (
        <div>
            <div className="overflow-hidden rounded-lg w-4/6">
                <ReactPlayer url={video_url} width="100%" controls />
            </div>
            <div>
                <p className={`text-videoTitle font-semibold text-lg mt-2 w-4/6 ${!darkMode && "text-slate-50"}`}>{title}</p>
                <div className="flex justify-between w-4/6">
                    <div>
                        <span className="mr-3 text-description font-normal text-md">{view_count} Views</span>
                        <span className="mr-3 text-description font-normal text-md">Published on {published_at}</span>
                    </div>
                    <div className="flex">
                        <button onClick={handleLike} className={`mr-2 text-description font-normal text-md flex justify-center items-center ${like && "text-blue-600"}`} type="button">
                            <BiSolidLike /> Like
                        </button>
                        <button onClick={handleUnLike} className={`mr-2 text-description font-normal text-md flex justify-center items-center ${unlike && "text-blue-600"}`} type="button">
                            <BiSolidDislike /> Dislike
                        </button>
                        <button onClick={() => handleSave(videosList)} className={`mr-2 text-description font-normal text-md flex justify-center items-center ${saveLike && "text-blue-600"}`} type="button">
                            <MdDataSaverOn /> Save
                        </button>
                    </div>
                </div>
                <hr className="my-2 border-slate-500 border-2 w-4/6" />
                <div>
                    <div className="flex">
                        <img className="w-20 h-20" src={channel.profile_image_url} alt="profile" />
                        <div className="ml-4">
                            <div className="mb-3">
                                <p className={`text-name font-semibold text-lg ${!darkMode && "text-slate-300"}`}>{channel.name}</p>
                                <p className="text-description font-normal text-sm">{channel.subscriber_count} Subscribers</p>
                            </div>
                            <div>
                                <p className={`text-slate-700 font-normal text-md w-4/6 ${!darkMode && "text-slate-50"}`}>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPlay;
