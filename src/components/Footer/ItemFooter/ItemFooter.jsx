import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.scss';

const ItemFooter = ({ item, href }) => {
    const { itemLink } = styles;
    return (
        <Link to={href} className={itemLink}>
            <p>{item}</p>
        </Link>
    );
};

export default ItemFooter;
