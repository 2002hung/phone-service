import MainLayout from '@components/Layout/MainLayout';
import styles from './styles.module.scss';
import { dataMenu } from './constants';
import Menu from './Menu/Menu';
import { CiSearch } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { PiHandbagLight } from 'react-icons/pi';
import Logo from '../../assets/images/LogoXstore.png';

const Header = () => {
    const { wrappHeader, left, imgLogo, between, right, iconRight } = styles;

    return (
        <MainLayout>
            <div className={wrappHeader}>
                <div className={left}>
                    <img className={imgLogo} src={Logo} alt='logo' />
                </div>
                <div className={between}>
                    {dataMenu.map((data, index) => (
                        <Menu
                            key={index}
                            content={data.content}
                            href={data.href}
                        />
                    ))}
                </div>
                <div className={right}>
                    <CiSearch className={iconRight} />
                    <CiHeart className={iconRight} />
                    <PiHandbagLight className={iconRight} />
                </div>
            </div>
        </MainLayout>
    );
};

export default Header;
