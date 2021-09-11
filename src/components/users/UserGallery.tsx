import React, { useEffect, useState } from 'react';
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
  const [page, setPage] = useState<number>(0);
  const [primaryInfo, setPrimaryInfo] = useState<IPrimaryInfo>();
  const [secondaryInfo, setSecondaryInfo] = useState<ISecondaryInfo>();
  const [tertiaryInfo, setTertiaryInfo] = useState<ITertiaryInfo>();
  const [imageUrl, setImageUrl] = useState<string>(props.user.images[0].url);
  const imageLength = props.user.images.length;

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
    setImageUrl(props.user.images[page].url);
  }, [page]);

  const onPhotoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    const isPrev = x < 110 && y > 30 && y < 400;
    const isNext = x > 330 && y > 30 && y < 400;

    setPage((prev) => {
      const noMove = (isPrev && prev === 0) || (isNext && prev === imageLength - 1);
      if (noMove) return prev;

      if (isNext) return prev + 1;
      else if (isPrev) return prev - 1;

      return prev;
    });
  };

  return (
    <div className={styles.userGallery}>
      <UserGalleryFigure onClick={onPhotoClick}>
        <Pagination page={page} length={imageLength} />
        <Figures photoUrl={imageUrl} />
        <Figcaption primaryInfo={primaryInfo} secondaryInfo={secondaryInfo} tertiaryInfo={tertiaryInfo} />
      </UserGalleryFigure>
    </div>
  );
};

export default UserGallery;
