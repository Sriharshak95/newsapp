import { useLocation, Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Back from '../../images/left-arrow.png';
import NewsCard from '../../components/card/card';

const Detail = () => {

    const location = useLocation();
    const {author, avatar, publishedAt, urlToImage,
    title, description, content, source} = location.news;

    return (
        <>
            <NewsCard 
                author={author}
                avatar={avatar}
                publishedAt={publishedAt}
                urlToImage={urlToImage}
                action={
                    <IconButton>
                        <Link to="/"><img src={Back} alt="back" /> Back to Feed</Link>
                    </IconButton>
                }
                title={title}
                description={description}
                source={source}
                content={content}
            />
        </>
    )
};

export default Detail;