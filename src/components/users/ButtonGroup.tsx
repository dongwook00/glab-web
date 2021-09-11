import styles from './ButtonGroup.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/images/close.svg';
import { ReactComponent as StarIcon } from '../../assets/images/star.svg';

const ButtonGroup: React.FC = () => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.buttonClose}>
        <CloseIcon />
      </button>
      <button className="like">좋아요</button>
      <button className="special-like">
        <StarIcon />
      </button>
    </div>
  );
};

export default ButtonGroup;
