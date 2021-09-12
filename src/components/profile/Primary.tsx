import styles from './Primary.module.scss';

const Primary: React.FC = () => {
  return (
    <section className={styles.primary}>
      <div className={styles.formGroup}>
        <div className={styles.type}>닉네임</div>
        <div className={styles.value}>헬로티모</div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.type}>성별</div>
        <div className={styles.value}>남성</div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.type}>생일</div>
        <div className={styles.value}>1985-11-10</div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.type}>위치</div>
        <div className={styles.value}>서울시 강남구</div>
      </div>
    </section>
  );
};

export default Primary;
