import styles from './style.module.scss';
import classNames from 'classnames';

function Button({ content, href, type, size, icon, ...props }) {
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
            {href ? <a href={href}>{content}</a> : content}
        </button>
    );
}

export default Button;
