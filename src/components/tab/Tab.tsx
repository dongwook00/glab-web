import styles from './Tab.module.scss';
import { ReactComponent as FilterIcon } from '../../assets/images/filter.svg';

const Tab: React.FC = () => {
  return (
    <header className={styles.tab}>
      <div className={styles.tabButtonGroup}>
        <button className={styles.active}>glam</button>
        <button>근처</button>
        <button>라이브</button>
      </div>
      <div className={styles.filter}>
        <FilterIcon />
      </div>
    </header>
  );
};

export default Tab;
