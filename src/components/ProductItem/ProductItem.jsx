import { useState } from 'react';
import styles from './styles.module.scss';
import { FaRegHeart } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

const ProductItem = () => {
    const { containerProduct, imgProduct, title, btn, price } = styles;

    const [isHeart, setIsHeart] = useState(true);

    return (
        <div className={containerProduct}>
            <div className={imgProduct}>
                <img
                    src='https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/13.1-min-600x600.jpg'
                    alt=''
                />
                <span onClick={() => setIsHeart((prev) => !prev)}>
                    {isHeart ? (
                        <FaRegHeart style={{ fontSize: '18px' }} />
                    ) : (
                        <FaHeart
                            style={{ fontSize: '18px', color: '#f56d0d' }}
                        />
                    )}
                </span>
                <div className={btn}>button</div>
            </div>
            <div>
                <h2 className={title}>
                    <a href='#'>Remax RP-W230 Infinitical Wireless Chargers</a>
                </h2>
                <div className='starProduct'>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </div>
                <span className={price}>$42.50</span>
                <div>button</div>
            </div>
        </div>
    );
};

export default ProductItem;
