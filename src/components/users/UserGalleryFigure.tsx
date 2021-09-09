import styles from './UserGalleryFigure.module.scss';

const UserGalleryFigure: React.FC = (props) => {
  return <figure className={styles.userGalleryFigure}>{props.children}</figure>;
};

export default UserGalleryFigure;
