import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import Introduction from './HomePageContent/Introduction';
import Services from './HomePageContent/Services';
import HomePageContent from './HomePageContent/HomePageContent';
import RepairOffer from './HomePageContent/RepairOffer';
import MediaHome from './HomePageContent/MediaHome';
import SlideItem from '@components/SlideItem/SlideItem';
import styles from './styles.module.scss'
import ItemListHome from './HomePageContent/ItemListHome';

const HomePage = () => {
    const {homePageContainer} = styles
    return (
        <div className={homePageContainer}>
            <Header />
            <Banner />
            <Introduction/>
            <Services/>
            <MediaHome/>
            <RepairOffer/>
            <HomePageContent/>
            <SlideItem/>
            <ItemListHome/>
            <Footer />
        </div>
    );
};

export default HomePage;
