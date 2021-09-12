import styles from './ProfileHeader.module.scss';

const ProfileHeader: React.FC = (props) => {
  return <header className={styles.profileHeader}>{props.children}</header>;
};

export default ProfileHeader;
