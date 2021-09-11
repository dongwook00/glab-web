import styles from './SecondaryInfo.module.scss';

const SecondaryInfo: React.FC = () => {
  return (
    <div className={styles.secondaryInfo}>
      <div className={styles.job}>디자인 관련직</div>
      <div className={styles.dot}>·</div>
      <div className={styles.location}>서울 송파구</div>
    </div>
  );
};

export default SecondaryInfo;
