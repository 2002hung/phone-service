import { Link } from 'react-router-dom';
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
        <>
            {!to ? <button
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
                {icon && <div className={boxIcon}>{icon}</div>}
                {content}
            </button> :
            <Link className={classNames(
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
                to={to}>
                    {content}
                </Link>
            }
        </>
    );
}

export default Button;
