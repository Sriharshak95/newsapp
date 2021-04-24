import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { Avatar } from '@material-ui/core';
import newsImage from '../../images/news.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '1.5rem'
    },
    media: {
        height: 140,
    },
    avatar: {
        backgroundColor: red[500],
    },
});

interface News {
    author: string,
    description: string,
    title: string,
    publishedAt: string,
    urlToImage: string,
    source:{
        id: any,
        name: string
    }
}

const Home = () => {

    const [listOfNews, setListOfNews] = React.useState<News[]>([]);
    React.useEffect(() => {
        getListOfNews();
    }, []);

    const getListOfNews = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=f1c3ca22d80a4d0b88485a568a6dd8ca&sortBy=publishedAt');

            const newsList = await response.json();
            setListOfNews(newsList.articles);
        } catch (e) {
            console.error(e);
        }
    }
    const classes = useStyles();

    const authorDisplay = (news: News) => {
        if (news.author !== null) {
            if (news.author.includes('https://')) {
                return news.author.substring(news.author.lastIndexOf('/') + 1).split("-").join(" ");
            } else {
                return news.author;
            }
        }
        return news.source.name;
    }

    const avatarDisplay = (news: News) => (
        news.author ? news.author.charAt(0) : news.source.name.charAt(0)
    );

    return (
        <Container maxWidth="sm">
            {
                listOfNews.map((news,index) => {
                    return (
                        <Card className={classes.root} key={news.publishedAt + index}>
                            <CardHeader
                                title={<p className={styles.author}>{authorDisplay(news)}</p>}
                                avatar={
                                    <Avatar className={classes.avatar}>{avatarDisplay(news)}</Avatar>
                                }
                                subheader={<p className={styles.publishedDate}>{moment(news.publishedAt).format("MMM D YYYY")}</p>}
                            />
                            <CardMedia
                                className={classes.media}
                                image={news.urlToImage ? news.urlToImage : newsImage}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <p className={styles.title}>{news.title}</p>
                                <div>
                                    <span className={styles.description}>{news.description + " "}</span>
                                    <Link to={{ pathname: "/detail", state: news }} className={styles.seeMore}>See More</Link>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </Container>
    )
};

export default Home;