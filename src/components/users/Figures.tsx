import styles from './Figures.module.scss';
import imageOnError from '../../assets/images/man.jpg';

interface FiguresProps {
  photoUrl: string;
}

const Figures: React.FC<FiguresProps> = (props) => {
  return (
    <div className={styles.figure}>
      <img src={props.photoUrl} alt="image" onError={(e) => (e.currentTarget.src = imageOnError)} />
    </div>
  );
};

export default Figures;
