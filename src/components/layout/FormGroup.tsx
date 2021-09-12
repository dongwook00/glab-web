import styles from './FormGroup.module.scss';

interface FormGroupProps {
  type: string;
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  return (
    <div className={styles.formGroup}>
      <div className={styles.type}>{props.type}</div>
      <div className={styles.value}>{props.children}</div>
    </div>
  );
};

export default FormGroup;
