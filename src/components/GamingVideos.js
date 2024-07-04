import { Link } from "react-router-dom";


const GamingVideos = (props) => {
    const { videoList } = props;

    const { thumbnail_url, title, view_count, id } = videoList;
    return (
        <Link to={`/videosplay/${id}`}>

            <div className="cursor-pointer m-2">

                <div>
                    <img className="mb-2 w-64" src={thumbnail_url} alt={title} />
                </div>
                <div className='flex w-64'>

                    <div>
                        <div>
                            <p className="text-about font-medium text-base">{title}</p>

                        </div>
                        <div>
                            <span className="text-description font-medium text-sm">{view_count} Watching World wide</span>

                        </div>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default GamingVideos
