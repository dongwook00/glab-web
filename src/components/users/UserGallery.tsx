import { useEffect, useState } from 'react';
import styles from './UserGallery.module.scss';
import UserGalleryFigure from './UserGalleryFigure';
import Figures from './Figures';
import Figcaption from './Figcaption';
import IUser from '../../interfaces/user';
import IPrimaryInfo from '../../interfaces/primaryInfo';
import ISecondaryInfo from '../../interfaces/secondaryInfo';
import ITertiaryInfo from '../../interfaces/tertiaryInfo';
import Pagination from './Pagination';

interface UserGalleryProps {
  user: IUser;
}

const UserGallery: React.FC<UserGalleryProps> = (props) => {
  const [page, setPage] = useState(0);
  const [primaryInfo, setPrimaryInfo] = useState<IPrimaryInfo>();
  const [secondaryInfo, setSecondaryInfo] = useState<ISecondaryInfo>();
  const [tertiaryInfo, setTertiaryInfo] = useState<ITertiaryInfo>();
  const photoUrl = props.user.images[page].url;

  useEffect(() => {
    const getPrimaryInfo = (info: IUser) => {
      const { nickname, birthday } = info;
      const age = (+new Date() - +new Date(birthday)) / 31536000000;

      return { nickname, age: Math.floor(age) };
    };
    const getSecondaryInfo = (info: IUser) => {
      const { jobField, location } = info;
      return { jobField, location };
    };
    const getTertiaryInfo = (info: IUser) => {
      const { height, education } = info;
      return { height, education };
    };
    const { user } = props;
    const primary = getPrimaryInfo(user);
    const secondary = getSecondaryInfo(user);
    const tertiary = getTertiaryInfo(user);

    setPrimaryInfo(primary);
    setSecondaryInfo(secondary);
    setTertiaryInfo(tertiary);
    setPage(0);
  }, [page]);

  return (
    <div className={styles.userGallery}>
      <UserGalleryFigure>
        <Pagination page={page} length={props.user.images.length} />
        <Figures photoUrl={photoUrl} />
        <Figcaption primaryInfo={primaryInfo} secondaryInfo={secondaryInfo} tertiaryInfo={tertiaryInfo} />
      </UserGalleryFigure>
    </div>
  );
};

export default UserGallery;
