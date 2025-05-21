import { Link, useLocation } from 'react-router-dom';
import styles from '../styles.module.scss';

const Menu = ({ content, href }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isActive = location.pathname === href;
    const { itemLink, active, homeMode } = styles;

    return (
        <>
            <Link
                className={`${itemLink} ${isActive ? active : ''} ${
                    isHome ? homeMode : ''
                }`}
                to={href}
            >
                {content}
            </Link>
        </>
    );
};

export default Menu;
