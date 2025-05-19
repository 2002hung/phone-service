import MainLayout from '@components/Layout/MainLayout';
import styles from './styles.module.scss';
import Logo from '../../assets/images/logoFooter.webp';
import { dataItem } from './constants';
import ItemFooter from './ItemFooter/ItemFooter';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    const { footer, wrappFooter, top, list, title, bottom, wrappIcon, icon } =
        styles;

    return (
        <div className={footer}>
            <MainLayout>
                <div className={wrappFooter}>
                    <div className={top}>
                        <div className={list}>
                            <img src={Logo} alt='' />
                        </div>
                        <div className={list}>
                            <p className={title}>Company</p>
                            {dataItem.slice(0, 6).map((item, index) => (
                                <ItemFooter
                                    key={index}
                                    item={item.content}
                                    href={item.href}
                                />
                            ))}
                        </div>
                        <div className={list}>
                            <p className={title}>Our Repairs</p>
                            {dataItem.slice(6, 12).map((item, index) => (
                                <ItemFooter
                                    key={index}
                                    item={item.content}
                                    href={item.href}
                                />
                            ))}
                        </div>
                        <div className={list}>
                            <p className={title}>Resources</p>
                            {dataItem.slice(12).map((item, index) => (
                                <ItemFooter
                                    key={index}
                                    item={item.content}
                                    href={item.href}
                                />
                            ))}
                        </div>
                        <div className={list}>
                            <p className={title}>Newsletter</p>

                            <div>input</div>
                        </div>
                    </div>
                    <div className={bottom}>
                        <p>
                            Copyright © 2024 XStore theme. Created by 8theme –
                            WordPress WooCommerce themes.
                        </p>
                        <div className={wrappIcon}>
                            <FaInstagram className={icon} />
                            <FaYoutube className={icon} />
                            <FaTelegramPlane className={icon} />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default Footer;
