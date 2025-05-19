import styles from './styles.module.scss';

const MainLayout = ({ children }) => {
    const { wrappLayout, container } = styles;
    return (
        <section className={wrappLayout}>
            <div className={container}>{children}</div>
        </section>
    );
};

export default MainLayout;
