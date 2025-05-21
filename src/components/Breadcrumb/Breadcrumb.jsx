import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Breadcrumb = ({ title }) => {
    const { breadcrumb } = styles;

    return (
        <div className={breadcrumb}>
            <div>
                <Link to={'/'}>Home &gt;</Link>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Breadcrumb;
