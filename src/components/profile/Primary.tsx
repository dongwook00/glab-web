import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { LayoutProfileSection, LayoutFormGroup } from '../layout';
import { DialogWithTextField } from '../common';
import styles from './Primary.module.scss';

const Primary: React.FC = () => {
  const profile = useAppSelector((state) => state.profile);
  const [nicknameEdit, setNicknameEdit] = useState<boolean>(false);

  return (
    <>
      <LayoutProfileSection>
        <LayoutFormGroup type="닉네임">
          <div className={styles.nickname} onClick={() => setNicknameEdit(true)}>
            {profile.nickname}
          </div>
        </LayoutFormGroup>
        <LayoutFormGroup type="성별">남성</LayoutFormGroup>
        <LayoutFormGroup type="생일">1985-11-10</LayoutFormGroup>
        <LayoutFormGroup type="위치">서울 강남구</LayoutFormGroup>
      </LayoutProfileSection>

      <DialogWithTextField value={profile.nickname} open={nicknameEdit} onClose={() => setNicknameEdit(false)} />
    </>
  );
};

export default Primary;
