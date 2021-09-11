import styles from './PrimaryInfo.module.scss';
import IPrimaryInfo from '../../interfaces/primaryInfo';

interface PrimaryInfoProps {
  info: IPrimaryInfo;
}

const PrimaryInfo: React.FC<PrimaryInfoProps> = (props) => {
  const { nickname, age } = props.info;
  return (
    <div className={styles.primaryInfo}>
      <div className={styles.nickname}>{nickname}</div>
      <div className={styles.comma}>,</div>
      <div className={styles.age}>{age}</div>
    </div>
  );
};

export default PrimaryInfo;
