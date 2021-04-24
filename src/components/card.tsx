import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import styles from './card.module.css';
import { Avatar } from '@material-ui/core';

const homeStyles = makeStyles({
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

const detailStyles = makeStyles({
        root: {
            maxWidth: 640,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: '1.5rem'
        },
        media: {
            height: 320,
        },
        avatar: {
            backgroundColor: red[500],
        },
        icon: {
            width: 12
        }
});
    

interface News {
    author: string,
    description: string,
    title: string,
    publishedAt: string,
    urlToImage: string,
    avatar?: string,
    pathname ?: string,
    source : {
        id: any,
        name: string
    },
    content ?: string,
    action ?: any
}


const NewsCard = (props: News) => {
    
     const classes = props.action ? detailStyles() : homeStyles();
    
    return (
        <Card className={classes.root}>
            <CardHeader
                title={<p className={styles.author}>{props.author}</p>}
                avatar={
                    <Avatar className={classes.avatar}>{props.avatar}</Avatar>
                }
                subheader={<p className={styles.publishedDate}>{props.publishedAt}</p>}
                action={props.action ? props.action : null}
            />
            <CardMedia
                className={classes.media}
                image={props.urlToImage}
                title={props.title}
            />
            <CardContent>
                <p className={styles.title}>{props.title}</p>
                <div>
                    <span className={styles.description}>{props.description}</span>
                    {props.pathname && 
                    <div>
                        <Link to={{ pathname: props.pathname, news: {...props} }} className={styles.seeMore}>See More</Link>
                    </div>
                    }
                    {props.action && 
                        <p className={styles.seeMore}>{props.content}</p>
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default NewsCard;