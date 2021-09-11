import styles from './TertiaryInfo.module.scss';
import ITertiaryInfo from '../../interfaces/tertiaryInfo';

interface TertiaryInfoProps {
  info: ITertiaryInfo;
}
const TertiaryInfo: React.FC<TertiaryInfoProps> = (props) => {
  const { height, education } = props.info;
  return (
    <div className={styles.tertiaryInfo}>
      <div className={styles.height}>{height}cm</div>
      <div className={styles.dot}>·</div>
      <div className={styles.education}>{education}</div>
    </div>
  );
};

export default TertiaryInfo;
