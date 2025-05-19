import { Link, useLocation } from 'react-router-dom';
import styles from '../styles.module.scss';

const Menu = ({ content, href }) => {
    const location = useLocation();
    const isActive = location.pathname === href;
    const { itemLink, active } = styles;

    return (
        <>
            <Link className={`${itemLink} ${isActive ? active : ''}`} to={href}>
                {content}
            </Link>
        </>
    );
};

export default Menu;
