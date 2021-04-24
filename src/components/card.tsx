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
import { PinDropSharp } from '@material-ui/icons';

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
    avatar: string,
    pathname ?: string,
    source:{
        id: any,
        name: string
    }
}

const card = (props: News) => {
    
     const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardHeader
                title={<p className={styles.author}>{props.author}</p>}
                avatar={
                    <Avatar className={classes.avatar}>{props.avatar}</Avatar>
                }
                subheader={<p className={styles.publishedDate}>{props.publishedAt}</p>}
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
                        <Link to={{ pathname: props.pathname, state: {...props} }} className={styles.seeMore}>See More</Link>
                    </div>
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default card;