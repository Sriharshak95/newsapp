import Container from '@material-ui/core/Container';
import { useLocation, Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Back from '../../images/left-arrow.png';
import NewsCard from '../../components/card/card';

const Detail = () => {

    let location = useLocation();
    const news = location.news;
    return (
        <Container maxWidth="md">
            <NewsCard 
                author={news.author}
                avatar={news.avatar}
                publishedAt={news.publishedAt}
                urlToImage={news.urlToImage}
                action={
                    <IconButton>
                        <Link to="/"><img src={Back} alt="back" /> Back to Feed</Link>
                    </IconButton>
                }
                title={news.title}
                description={news.description}
                source={news.source}
                content={news.content}
            />
            {/* <Card className={classes.root}>
                <CardHeader
                    title={<p className={styles.author}>{authorDisplay(data)}</p>}
                    avatar={
                        <Avatar className={classes.avatar}>{avatarDisplay(data)}</Avatar>
                    }
                    subheader={<p className={styles.publishedDate}>{moment(data.publishedAt).format("MMM D YYYY")}</p>}
                    action={
                        <IconButton>
                            <Link className={styles.backToFeed} to="/"><img src={Back} alt="back" className={styles.backToFeedIcon} /> Back to Feed</Link>
                        </IconButton>
                    }
                />
                <CardMedia
                    className={classes.media}
                    image={(data.urlToImage!==null)?data.urlToImage:newsImage}
                    title={data.source.name}
                />
                <CardContent>
                    <p style={{ fontSize: 18, fontWeight: 600, marginTop: 0 }}>{data.title}</p>
                    <div>
                        <span><img src={Up} alt="up" className={classes.icon} /> {data.source.name + " "}</span><span className={styles.description}>{data.description + " "}</span>
                        <p className={styles.seeMore}>{data.content}</p>
                    </div>
                </CardContent>
            </Card> */}
        </Container>
    )
};

export default Detail;