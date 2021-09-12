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
  about: string | null | undefined;
  page: number;
}

const Figcaption: React.FC<FigcaptionProps> = (props) => {
  const { page, about, primaryInfo, secondaryInfo, tertiaryInfo } = props;
  let content;

  if (page === 0 && about !== null) {
    content = (
      <div style={{ marginBottom: '1.5rem' }}>
        <pre>{about}</pre>
      </div>
    );
  } else {
    content = (
      <>
        {secondaryInfo && <SecondaryInfo info={secondaryInfo} />}
        {tertiaryInfo && <TertiaryInfo info={tertiaryInfo} />}
      </>
    );
  }

  return (
    <figcaption className={styles.figcaption}>
      <Chip />
      {primaryInfo && <PrimaryInfo info={primaryInfo} />}
      {content}
      <ButtonGroup />
    </figcaption>
  );
};

export default Figcaption;
