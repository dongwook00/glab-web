import styles from './Figures.module.scss';
import imageOnError from '../../assets/images/man.jpg';

interface Figures {
  photoUrl: string;
}

const Figures: React.FC<Figures> = (props) => {
  return (
    <div className={styles.figure}>
      <img src={props.photoUrl} alt="image" onError={(e) => (e.currentTarget.src = imageOnError)} />
    </div>
  );
};

export default Figures;
