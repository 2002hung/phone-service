import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import HomePageContent from './HomePageContent/HomePageContent';
import styles from './styles.module.scss'

const HomePage = () => {
    const {homePageContainer} = styles
    return (
        <div className={homePageContainer}>
            <Header />
            <HomePageContent />
            <Footer />
        </div>
    );
};

export default HomePage;
