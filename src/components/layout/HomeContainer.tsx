import styles from './HomeContainer.module.scss';

const Container: React.FC = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
