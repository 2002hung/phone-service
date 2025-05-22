import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import Introduction from './HomePageContent/Introduction';
import HomePageContent from './HomePageContent/HomePageContent';
import styles from './styles.module.scss'

const HomePage = () => {
    const {homePageContainer} = styles
    return (
        <div className={homePageContainer}>
            <Header />
            <Banner />
            <Introduction/>
            <HomePageContent/>
            <Footer />
        </div>
    );
};

export default HomePage;
