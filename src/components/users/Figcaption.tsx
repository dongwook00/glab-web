import styles from './Figcaption.module.scss';
import Chip from './Chip';
import PrimaryInfo from './PrimaryInfo';
import SecondaryInfo from './SecondaryInfo';
import TertiaryInfo from './TertiaryInfo';
import ButtonGroup from './ButtonGroup';

const Figcaption: React.FC = () => {
  return (
    <figcaption className={styles.figcaption}>
      <Chip />
      <PrimaryInfo />
      <SecondaryInfo />
      <TertiaryInfo />
      <ButtonGroup />
    </figcaption>
  );
};

export default Figcaption;
