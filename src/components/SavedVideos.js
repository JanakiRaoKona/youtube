import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SavedVideos = () => {
    const videoList = useSelector(store => store.save.items);

    if (videoList.length === 0) return <h1>No Saved Videos</h1>;
    console.log(videoList);

    return (
        <div className="h-screen">
            <h1>Saved Videos</h1>
            {videoList.map(eachSaved => {
                const { thumbnail_url, title, channel, view_count, published_at, id } = eachSaved;
                return (
                    <Link key={id} to={`/videosplay/${id}`}>
                        <div className="flex justify-start">
                            <div>
                                <img className="m-2 w-64 h-52" src={thumbnail_url} alt={title} />
                            </div>
                            <div className='flex w-4/6'>

                                <div>
                                    <div>
                                        <p className="text-about font-medium text-base">{title}</p>
                                        <p className="text-description font-medium text-sm">{channel.name}</p>
                                    </div>
                                    <div>
                                        <span className="text-description font-medium text-sm">{view_count} Views</span>
                                        <span className="text-description font-medium text-sm ml-2">Published On{published_at}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default SavedVideos;
