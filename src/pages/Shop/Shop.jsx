import Filter from '@components/Filter/Filter';
import styles from './styles.module.scss';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/MainLayout';
import Sidebar from '@components/Sidebar/Sidebar';
import { ShopProvider } from '@contexts/ShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import { getProducts } from '@/apis/productsService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Shop = () => {
    const { shop, left, right, boxProduct } = styles;

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProduct(res);
            })
            .catch(() => {
                toast.error('error data');
            });
    }, []);

    return (
        <ShopProvider>
            <div>
                <Header />
                <Breadcrumb title={'Shop'} />
                <MainLayout>
                    <div className={shop}>
                        <div className={left}>
                            <Sidebar />
                        </div>
                        <div className={right}>
                            <Filter />
                            <div className={boxProduct}>
                                {product.map((item, index) => {
                                    return (
                                        <ProductItem key={index} data={item} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </MainLayout>
                <Footer />
            </div>
        </ShopProvider>
    );
};

export default Shop;
