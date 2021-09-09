import styles from './SecondaryInfo.module.scss';

const SecondaryInfo: React.FC = () => {
  return (
    <div className={styles.secondaryInfo}>
      <p>회사원 서울특별시</p>
      <p>161cm 대학교</p>
    </div>
  );
};

export default SecondaryInfo;
