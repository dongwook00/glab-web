import styles from './Pagination.module.scss';

interface PaginationProps {
  page: number;
  length: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { page, length } = props;

  return (
    <div className={styles.pages}>
      {Array(length)
        .fill(null)
        .map((_, i) => {
          const classes = i === page ? `${styles.page} ${styles.active}` : `${styles.page}`;
          return <div key={i} className={classes} />;
        })}
    </div>
  );
};

export default Pagination;
