import styles from './Figures.module.scss';

interface Figures {
  photoUrl: string;
}

const Figures: React.FC<Figures> = (props) => {
  return (
    <div className={styles.figure}>
      <img src={props.photoUrl} alt="image" />
    </div>
  );
};

export default Figures;
