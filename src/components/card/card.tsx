import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import styles from './card.module.css';
import { Avatar } from '@material-ui/core';
import { homeStyles, detailStyles } from '../../styles';
import { NewsInterface } from '../../interface';

//Reusable Card Component to display Individual News Feeds.
const NewsCard = (props: NewsInterface) => {

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
                <a href={props.url} target="_blank" rel="noreferrer" className={styles.title}>{props.title}</a>
                <div>
                    <span className={styles.description}>{props.description}</span>
                    {props.pathname &&
                        <div>
                            <Link to={{ pathname: props.pathname, news: { ...props } }} className={styles.seeMore}>See More</Link>
                        </div>
                    }
                    {props.action &&
                        <p className={styles.content}>{props.content}</p>
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default NewsCard;