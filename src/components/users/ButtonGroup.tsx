import styles from './ButtonGroup.module.scss';

const ButtonGroup: React.FC = () => {
  return (
    <div className={styles.buttonGroup}>
      <button className="dislike">X</button>
      <button className="like">좋아요</button>
      <button className="special-like">*</button>
    </div>
  );
};

export default ButtonGroup;
