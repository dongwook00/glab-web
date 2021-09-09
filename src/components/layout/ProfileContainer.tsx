import styles from './ProfileContainer.module.scss';

const ProfileContainer: React.FC = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ProfileContainer;
