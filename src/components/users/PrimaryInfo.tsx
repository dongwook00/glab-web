import styles from './PrimaryInfo.module.scss';

const PrimaryInfo: React.FC = () => {
  return (
    <div className={styles.primaryInfo}>
      <div className={styles.nickname}>연두</div>
      <div className={styles.comma}>,</div>
      <div className={styles.age}>29</div>
    </div>
  );
};

export default PrimaryInfo;
