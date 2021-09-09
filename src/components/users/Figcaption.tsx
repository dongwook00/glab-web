import styles from './Figcaption.module.scss';
import Chip from './Chip';
import PrimaryInfo from './PrimaryInfo';
import SecondaryInfo from './SecondaryInfo';

const Figcaption: React.FC = () => {
  return (
    <figcaption className={styles.figcaption}>
      <Chip />
      <PrimaryInfo />
      <SecondaryInfo />
    </figcaption>
  );
};

export default Figcaption;
