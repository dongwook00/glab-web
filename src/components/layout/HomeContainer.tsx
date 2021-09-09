import styles from './HomeContainer.module.scss';

const Container: React.FC = (props) => {
  return <main className={styles.container}>{props.children}</main>;
};

export default Container;
