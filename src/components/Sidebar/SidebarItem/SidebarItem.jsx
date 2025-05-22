import { useState } from 'react';
import styles from '../styles.module.scss';

const SidebarItem = ({ children, title }) => {
    const { sidebarItem, closedItem, closed, content, closedContent } = styles;

    const [open, setOpen] = useState(true);

    const toggleOpen = () => setOpen((prev) => !prev);

    return (
        <div className={`${sidebarItem} ${open ? '' : closedItem}`}>
            <h4 onClick={toggleOpen} className={open ? '' : closed}>
                {title}
            </h4>

            <div className={`${content} ${!open ? closedContent : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default SidebarItem;
