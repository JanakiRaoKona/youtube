/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import ReactPlayer from 'react-player';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdDataSaverOn } from "react-icons/md";
import { useDispatch } from "react-redux"
import { addedItems } from '../utlis/savedSlice';

const VideoPlay = () => {
    const { resId } = useParams();
    const [videosList, setVideosList] = useState(null);
    const [likeToggle, setLikeToggle] = useState(false);
    const [unLikeToggle, setUnLikeToggle] = useState(false);
    const [saveItem, setSaveItem] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getVideoDetails();
    }, [resId]);

    const handleLike = () => {
        setLikeToggle(!likeToggle);
        setUnLikeToggle(false);
    }

    const handleUnLike = () => {
        setUnLikeToggle(!unLikeToggle);
        setLikeToggle(false);
    }

    const handleSave = (videosList) => {
        setSaveItem(!saveItem);
        dispatch(addedItems(videosList.video_details))

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
            <div className="overflow-hidden rounded-lg">
                <ReactPlayer url={video_url} width="66.67%" controls />
            </div>
            <div>
                <p className="text-videoTitle font-semibold text-lg mt-2 w-4/6">{title}</p>
                <div className="flex justify-between w-4/6">
                    <div>
                        <span className="mr-3 text-description font-normal text-md">{view_count} Views</span>
                        <span className="mr-3 text-description font-normal text-md">Published on {published_at}</span>
                    </div>
                    <div className="flex">
                        <button onClick={handleLike} className={`mr-2 text-description font-normal text-md flex justify-center items-center ${likeToggle && "text-blue-700"}`} type="button">
                            <BiSolidLike /> Like
                        </button>
                        <button onClick={handleUnLike} className={`mr-2 text-description font-normal text-md flex justify-center items-center ${unLikeToggle && "text-blue-700"}`} type="button">
                            <BiSolidDislike /> Dislike
                        </button>
                        <button onClick={() => handleSave(videosList)} className={`mr-2 text-description font-normal text-md flex justify-center items-center ${saveItem && "text-blue-700"}`} type="button">
                            <MdDataSaverOn /> Save
                        </button>
                    </div>
                </div>
                <hr className="my-2 border-slate-100 border-2 w-4/6" />
                <div>
                    <div className="flex">
                        <img className="w-20 h-20" src={channel.profile_image_url} alt="profile" />
                        <div className="ml-4">
                            <div className="mb-3">
                                <p className="text-name font-semibold text-lg">{channel.name}</p>
                                <p className="text-description font-normal text-sm">{channel.subscriber_count} Subscribers</p>
                            </div>
                            <div>
                                <p className="text-slate-700 font-normal text-md w-4/6">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPlay;
