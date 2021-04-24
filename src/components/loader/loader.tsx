import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './loader.module.css';

const Loader = () => {
    return (
    <div className={styles.loaderWrapper}>
        <CircularProgress />
    </div>
    );
};

export default Loader;