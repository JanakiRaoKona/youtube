
import { formatDistanceToNow } from 'date-fns'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Videos = (props) => {
    const darkMode = useSelector(store => store.darkmode);

    const { videoList } = props;

    const { thumbnail_url, title, channel, view_count, published_at, id } = videoList;

    const published = formatDistanceToNow(published_at)
    let replacedStr = published.replace(/(?:about|over)\s+(\d+)\s+years/, "$1 years ago");


    return (
        <Link to={`/videosplay/${id}`}>

            <div>

                <img className="m-2 w-64" src={thumbnail_url} alt={title} />
            </div>
            <div className='flex w-64'>
                <div>
                    <img className="w-20" src={channel.profile_image_url} alt={channel.name} />
                </div>
                <div>
                    <div>
                        <p className={`text-about font-medium text-base ${!darkMode && "text-slate-300"}`}>{title}</p>
                        <p className="text-description font-medium text-sm">{channel.name}</p>
                    </div>
                    <div>
                        <span className="text-description font-medium text-sm">{view_count} Views</span>
                        <span className="text-description font-medium text-sm ml-2">{replacedStr}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Videos
