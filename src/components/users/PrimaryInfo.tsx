import styles from './PrimaryInfo.module.scss';

const PrimaryInfo: React.FC = () => {
  return (
    <div className={styles.primaryInfo}>
      <span className={styles.nickname}>연두</span>
      <span className={styles.comma}>,</span>
      <span className={styles.age}>29</span>
      <span className={styles.help}>i</span>
    </div>
  );
};

export default PrimaryInfo;
