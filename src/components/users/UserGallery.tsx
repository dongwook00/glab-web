import styles from './UserGallery.module.scss';
import UserGalleryFigure from './UserGalleryFigure';
import Figures from './Figures';
import Figcaption from './Figcaption';

const UserGallery: React.FC = () => {
  return (
    <div className={styles.userGallery}>
      <UserGalleryFigure>
        <Figures />
        <Figcaption />
      </UserGalleryFigure>
    </div>
  );
};

export default UserGallery;
