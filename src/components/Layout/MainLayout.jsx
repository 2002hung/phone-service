import styles from './styles.module.scss';

const MainLayout = ({ chidren }) => {
    const { wrappLayout, container } = styles;
    return (
        <section className={wrappLayout}>
            <div className={container}>{chidren}</div>
        </section>
    );
};

export default MainLayout;
