import styles from './BottomNav.module.scss';

const BottomNav: React.FC = (props) => {
  return (
    <nav className={styles.container}>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default BottomNav;
