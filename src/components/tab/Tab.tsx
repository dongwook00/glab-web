import styles from './Tab.module.scss';

const Tab: React.FC = () => {
  return (
    <header className={styles.tab}>
      <div className={styles.tabButtonGroup}>
        <button>glam</button>
        <button>근처</button>
        <button>라이브</button>
      </div>
      <div className={styles.filter}>filter</div>
    </header>
  );
};

export default Tab;
