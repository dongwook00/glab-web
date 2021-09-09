import styles from './Figures.module.scss';

const Figures: React.FC = () => {
  return (
    <div className={styles.figure}>
      <img src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?fit=crop&fm=jpg&h=500&q=50&w=500" alt="image" />
    </div>
  );
};

export default Figures;
