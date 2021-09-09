import React, { useState, useCallback } from 'react';
import readFileAsDataURL from './readFileAsDataURL';
import userDefaultImage from '../../assets/images/default-user-image.png';
import styles from './FileUploadField.module.scss';

const FileUploadField: React.FC = () => {
  const [preview, setPreviewImage] = useState<string | undefined>('#');

  const handleChange = useCallback(({ target }) => {
    const doFileRead = async () => {
      const result = await readFileAsDataURL(target.files[0]);
      setPreviewImage(result as string);
    };
    doFileRead();
  }, []);

  return (
    <div className={styles.fileUploadField}>
      <div className={styles.inputGroup}>
        <label htmlFor="fileUpload">
          <img src={userDefaultImage} />
        </label>
        <input type="file" id="fileUpload" accept="image/*" onChange={handleChange} />
      </div>
      <div className={styles.preview}>
        <img
          src={preview}
          alt="Preview"
          onError={(e) => (e.currentTarget.style.display = 'none')}
          onLoad={(e) => (e.currentTarget.style.display = 'inline-block')}
        />
      </div>
    </div>
  );
};

export default FileUploadField;
