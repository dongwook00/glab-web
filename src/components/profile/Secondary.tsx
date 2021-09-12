import styles from './Secondary.module.scss';

const Secondary: React.FC = () => {
  return (
    <section className={styles.secondary}>
      <div className={styles.formGroup}>
        <div className={styles.type}>키</div>
        <div className={styles.value}>171cm</div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.type}>체형</div>
        <div className={styles.value}>보통</div>
      </div>
    </section>
  );
};

export default Secondary;
