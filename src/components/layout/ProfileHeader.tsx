import styles from './ProfileHeader.module.scss';

const ProfileHeader: React.FC = (props) => {
  return <header className={styles.container}>{props.children}</header>;
};

export default ProfileHeader;
