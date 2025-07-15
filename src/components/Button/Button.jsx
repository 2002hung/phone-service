import { Navigate } from 'react-router-dom';
import styles from './style.module.scss';
import classNames from 'classnames';

function Button({ content, to, type, size, icon, ...props }) {
    const {
        btn,
        boxIcon,
        primaryBtn,
        darkBtn,
        lightBtn,
        whiteBtn,
        normalBtn,
        smallBtn,
        fullBtn,
    } = styles;

    return (
        <button
            className={classNames(
                [btn],
                {
                    [primaryBtn]: type == 'primary',
                    [darkBtn]: type == 'dark',
                    [lightBtn]: type == 'light',
                    [whiteBtn]: type == 'white',
                },
                {
                    [normalBtn]: size == 'normal',
                    [smallBtn]: size == 'small',
                    [fullBtn]: size == 'full',
                },
            )}
            {...props}
        >
            <div className={boxIcon}>{icon}</div>
            {to ? <Navigate to={to}>{content}</Navigate> : content}
        </button>
    );
}

export default Button;
