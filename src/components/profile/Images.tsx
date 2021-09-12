import FileUploadField from './FileUploadField';
import styles from './Images.module.scss';

const Images: React.FC = () => {
  return (
    <section className={styles.images}>
      <div className={styles.imageUploader}>
        <FileUploadField />
        <FileUploadField />
        <FileUploadField />
        <FileUploadField />
        <FileUploadField />
        <FileUploadField />
      </div>
      <div className={styles.text}>
        <p>
          다양한 매력을 보여줄 수 있는 사진을 올려주세요 <b>더 알아보기</b>
        </p>
      </div>
    </section>
  );
};

export default Images;
