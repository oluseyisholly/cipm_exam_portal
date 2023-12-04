import styles from './main.module.css'

interface SideBarItemsProps {
    icon: React.ReactNode;
    name: string;
}

const SideBarItem: React.FC<SideBarItemsProps> = ({icon, name}) => {
    
  
    return (
        <div className={styles.sideBarItem}>
            {icon}
            <span>{name}</span>
        </div>
    );
  };
  
  export default SideBarItem;