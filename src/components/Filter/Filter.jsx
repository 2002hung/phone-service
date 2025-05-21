import SelectBox from '@components/SelectBox/SelectBox';
import styles from './styles.module.scss';
import { CiCircleList } from 'react-icons/ci';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { ShopContext } from '@contexts/ShopProvider';
import { useContext, useState } from 'react';

const Filter = () => {
    const { cotainerFilter, boxLeft, boxIcon, icon, boxRight, active } = styles;

    const { sortOptions, showOptions, setSortId, setShowId, setIsShowGrid } =
        useContext(ShopContext);
    const [isActive, setIsActive] = useState('gird');

    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else if (type === 'show') {
            setShowId(value);
        }
    };

    const handleGetShowGird = (type) => {
        setIsShowGrid(type === 'gird');
        setIsActive(type);
    };

    return (
        <div className={cotainerFilter}>
            <div className={boxLeft}>
                <SelectBox
                    options={sortOptions}
                    getvalue={getValueSelect}
                    type='sort'
                />
                <div className={boxIcon}>
                    <div className={icon}>
                        <BsGrid3X3Gap
                            style={{ fontSize: '20px', cursor: 'pointer' }}
                            className={`${isActive === 'gird' ? active : ''}`}
                            onClick={() => handleGetShowGird('gird')}
                        />
                    </div>
                    <div
                        style={{
                            width: '1px',
                            height: '22px',
                            margin: '0 3px 0',
                            backgroundColor: '#e1e1e1'
                        }}
                    />
                    <div className={icon}>
                        <CiCircleList
                            style={{ fontSize: '23px', cursor: 'pointer' }}
                            className={`${isActive === 'list' ? active : ''}`}
                            onClick={() => handleGetShowGird('list')}
                        />
                    </div>
                </div>
            </div>
            <div className={boxRight}>
                <p>Show</p>
                <SelectBox
                    options={showOptions}
                    getvalue={getValueSelect}
                    type='show'
                />
            </div>
        </div>
    );
};

export default Filter;
