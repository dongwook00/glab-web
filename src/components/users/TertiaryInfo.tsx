import styles from './TertiaryInfo.module.scss';

const TertiaryInfo: React.FC = () => {
  return (
    <div className={styles.tertiaryInfo}>
      <div className={styles.height}>157cm</div>
      <div className={styles.dot}>·</div>
      <div className={styles.education}>대학교</div>
    </div>
  );
};

export default TertiaryInfo;
