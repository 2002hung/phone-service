import InputSearch from '@components/InputSearch/InputSearch';
import styles from './styles.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = () => {
    const { boxSidebar } = styles;

    return (
        <div className={boxSidebar}>
            <SidebarItem title={'Filter by categories'}>
                <InputSearch type={'text'} placeholder={'Find a category'} />
            </SidebarItem>
            <SidebarItem title={'Price'}></SidebarItem>
            <SidebarItem title={'Filter by brand'}>
                <InputSearch type={'text'} placeholder={'Find a brand'} />
            </SidebarItem>
            <SidebarItem title={'Status'}></SidebarItem>
        </div>
    );
};

export default Sidebar;
