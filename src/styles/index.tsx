import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const homeStyles = makeStyles({
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

export const detailStyles = makeStyles({
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
