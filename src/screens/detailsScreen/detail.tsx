import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import moment from 'moment';
import { useLocation, Link } from 'react-router-dom';
import styles from './detail.module.css';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import Up from '../../images/caret-arrow-up.png';
import Back from '../../images/left-arrow.png';
import newsImage from '../../images/news.jpg';

const useStyles = makeStyles({
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

const Detail = () => {
    let location = useLocation();
    const data = location.state;
    const classes = useStyles();

    const authorDisplay = (result: any) => {
        if (result.author !== null) {
            if (result.author.includes('https://')) {
                return result.author.substring(result.author.lastIndexOf('/') + 1).split("-").join(" ");
            } else {
                return result.author;
            }
        }
        return result.source.name;
    }

    const avatarDisplay = (result:any) =>{
        if(result.author!==null){
            return result.author.charAt(0);
        }else{
            return result.source.name.charAt(0);
        }
    }

    return (
        <Container maxWidth="md">
            <Card className={classes.root}>
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
            </Card>
        </Container>
    )
};

export default Detail;