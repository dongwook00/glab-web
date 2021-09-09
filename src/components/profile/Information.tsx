import { DialogWithTextField, DialogWithDatePicker } from '../common';
import styles from './Information.module.scss';

const Information: React.FC = () => {
  return (
    <section className={styles.primary}>
      <DialogWithTextField />
      <DialogWithDatePicker />
      <div className={styles.formGroup}>
        <div>닉네임</div>
        <div>헬로티모</div>
      </div>
      <div className={styles.formGroup}>
        <div>성별</div>
        <div>남성</div>
      </div>
      <div className={styles.formGroup}>
        <div>생일</div>
        <div>1985-11-10</div>
      </div>
      <div className={styles.formGroup}>
        <div>위치</div>
        <div>서울시 강남구</div>
      </div>
    </section>
  );
};

export default Information;
