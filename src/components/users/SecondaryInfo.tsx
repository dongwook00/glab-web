import styles from './SecondaryInfo.module.scss';
import ISecondaryInfo from '../../interfaces/secondaryInfo';

interface SecondaryInfoProps {
  info: ISecondaryInfo;
}
const SecondaryInfo: React.FC<SecondaryInfoProps> = (props) => {
  const { jobField, location } = props.info;
  return (
    <div className={styles.secondaryInfo}>
      <div className={styles.job}>{jobField}</div>
      <div className={styles.dot}>·</div>
      <div className={styles.location}>{location}</div>
    </div>
  );
};

export default SecondaryInfo;
