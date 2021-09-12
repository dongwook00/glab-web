import styles from './ProfileMain.module.scss';

const ProfileMain: React.FC = (props) => {
  return <main className={styles.profileMain}>{props.children}</main>;
};

export default ProfileMain;
