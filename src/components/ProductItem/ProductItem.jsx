import { useState } from 'react';
import styles from './styles.module.scss';
import { FaRegHeart } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import Button from '@components/Button/Button';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

const ProductItem = ({ data, className }) => {
    const { containerProduct, imgProduct, title, btn, price } = styles;

    const [isHeart, setIsHeart] = useState(true);

    return (
        <div className={`${containerProduct} ${className || ''}`}>
            <div className={imgProduct}>
                <img src={data?.imagesURL[0]} alt='' />
                <span onClick={() => setIsHeart((prev) => !prev)}>
                    {isHeart ? (
                        <FaRegHeart style={{ fontSize: '18px' }} />
                    ) : (
                        <FaHeart
                            style={{ fontSize: '18px', color: '#f56d0d' }}
                        />
                    )}
                </span>
                <div className={btn}>
                    <Button
                        content={'Quick shop'}
                        type='dark'
                        size={'full'}
                        icon={<MdOutlineRemoveRedEye />}
                    />
                </div>
            </div>
            <div>
                <h2 className={title}>
                    <a href={`/${data?._id}`}>{data?.name}</a>
                </h2>
                <div className='starProduct'>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </div>
                <span className={price}>${data?.price}</span>
                <div>
                    <Button content={'Add to cart'} type='light' size='small' />
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
