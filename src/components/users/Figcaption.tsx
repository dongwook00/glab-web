import styles from './Figcaption.module.scss';
import Chip from './Chip';
import PrimaryInfo from './PrimaryInfo';
import SecondaryInfo from './SecondaryInfo';
import TertiaryInfo from './TertiaryInfo';
import ButtonGroup from './ButtonGroup';
import IPrimaryInfo from '../../interfaces/primaryInfo';
import ISecondaryInfo from '../../interfaces/secondaryInfo';
import ITertiaryInfo from '../../interfaces/tertiaryInfo';

interface FigcaptionProps {
  primaryInfo?: IPrimaryInfo;
  secondaryInfo?: ISecondaryInfo;
  tertiaryInfo?: ITertiaryInfo;
}

const Figcaption: React.FC<FigcaptionProps> = (props) => {
  return (
    <figcaption className={styles.figcaption}>
      <Chip />
      {props.primaryInfo && <PrimaryInfo info={props.primaryInfo} />}
      {props.secondaryInfo && <SecondaryInfo info={props.secondaryInfo} />}
      {props.tertiaryInfo && <TertiaryInfo info={props.tertiaryInfo} />}
      <ButtonGroup />
    </figcaption>
  );
};

export default Figcaption;
