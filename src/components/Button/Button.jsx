import styles from './style.module.scss';
import classNames from 'classnames';

function Button({
    content,
    href,
    type,
    size,
    ...props

}){
    const {btn,primaryBtn,darkBtn,lightBtn,whiteBtn,normalBtn,smallBtn} = styles;
    return (
        <button
            className={classNames([btn],{
                [primaryBtn]: type=="primary",
                [darkBtn]: type=="dark",
                [lightBtn]: type=="light",
                [whiteBtn]: type=='white'
            },{
                [normalBtn]: size=="normal",
                [smallBtn]: size=="small"
            })}
            {...props}
        >
            {href? (<a href={href}>{content}</a>) : content}
        </button>
    );
}

export default Button;