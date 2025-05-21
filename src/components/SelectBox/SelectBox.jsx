import styles from './styles.module.scss';

const SelectBox = ({ options, setvalue, type }) => {
    const { boxSelect } = styles;

    return (
        <select
            onChange={(e) => setvalue(e.target.value, type)}
            className={boxSelect}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
