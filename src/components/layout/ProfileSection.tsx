import styles from './ProfileSection.module.scss';

const ProfileSection: React.FC = (props) => {
  return <section className={styles.profileSection}>{props.children}</section>;
};

export default ProfileSection;
