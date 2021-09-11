import styles from './UserGalleryFigure.module.scss';
interface UserGalleryFigurePros {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const UserGalleryFigure: React.FC<UserGalleryFigurePros> = (props) => {
  return (
    <figure onClick={props.onClick} className={styles.userGalleryFigure}>
      {props.children}
    </figure>
  );
};

export default UserGalleryFigure;
