import styles from './styles.module.scss';

const MainLayout = () => {
    const { wrappLayout, container } = styles;
    return (
        <section className={wrappLayout}>
            <div className={container}></div>
        </section>
    );
};

export default MainLayout;
