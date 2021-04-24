import React from 'react';
import Container from '@material-ui/core/Container';
import NewsCard from '../../components/card/card';
import moment from 'moment';
import newsImage from '../../images/news.jpg';
import Loader from '../../components/loader/loader';
import Error from '../../components/error/error';

interface News {
    author: string,
    description: string,
    title: string,
    publishedAt: string,
    urlToImage: string,
    source: {
        id: any,
        name: string
    },
    content: string
}

const Home = () => {

    const [listOfNews, setListOfNews] = React.useState<News[]>([]);
    const [error, setError] = React.useState(false);
    const [isLoading, setLoading] = React.useState(true);
    React.useEffect(() => {
        getListOfNews();
    }, []);

    const getListOfNews = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=f1c3ca22d80a4d0b88485a568a6dd8ca&sortBy=publishedAt');

            const newsList = await response.json();
            setListOfNews([...newsList.articles]);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

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
        error ? <Error /> :
        isLoading ? <Loader /> :
                listOfNews.map((news,index) => {
                    return (
                        <NewsCard 
                            key={news.publishedAt+index}
                            author={authorDisplay(news)}
                            avatar={avatarDisplay(news)}
                            publishedAt={moment(news.publishedAt).format("MMM D YYYY")}
                            urlToImage={news.urlToImage ? news.urlToImage : newsImage}
                            title={news.title}
                            description={news.description}
                            pathname="/detail" 
                            source={news.source}
                            content={news.content}
                        />
                    )
                })
            }
        </Container>
    )
};

export default Home;