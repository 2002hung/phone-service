import styles from './styles.module.scss';
import { IoIosSearch } from 'react-icons/io';

const InputSearch = ({ type, placeholder }) => {
    const { inputBox, boxIcon, icon } = styles;

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <div className={inputBox}>
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <span className={boxIcon}>
                    <IoIosSearch className={icon} />
                </span>
            </div>
        </div>
    );
};

export default InputSearch;
