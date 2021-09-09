import sprite from '../../assets/images/sprite.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.icon}>
        <svg>
          <use href={`${sprite}#left-arrow`} />
        </svg>
      </div>
      <div className={styles.title}>
        <h5>헤더</h5>
      </div>
    </>
  );
};

export default Header;
