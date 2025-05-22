import Filter from '@components/Filter/Filter';
import styles from './styles.module.scss';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/MainLayout';
import Sidebar from '@components/Sidebar/Sidebar';
import { ShopProvider } from '@contexts/ShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';

const Service = () => {
    const { shop, left, right, boxProduct } = styles;

    return (
        <ShopProvider>
            <div>
                <Header />
                <Breadcrumb title={'Service'} />
                <MainLayout>
                    <div className={shop}>
                        <div className={left}>
                            <Sidebar />
                        </div>
                        <div className={right}>
                            <Filter />
                            <div className={boxProduct}>
                                <ProductItem />
                            </div>
                        </div>
                    </div>
                </MainLayout>
                <Footer />
            </div>
        </ShopProvider>
    );
};

export default Service;
