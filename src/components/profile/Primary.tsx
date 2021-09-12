import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { LayoutProfileSection, LayoutFormGroup } from '../layout';
import { DialogWithTextField, DialogWithDatePicker } from '../common';
import styles from './Primary.module.scss';

const Primary: React.FC = () => {
  const profile = useAppSelector((state) => state.profile);
  const [showNicknameUpdateDialog, setShowNicknameUpdateDialog] = useState<boolean>(false);
  const [showBirthdayUpdateDialog, setShowBirthdayUpdateDialog] = useState<boolean>(false);
  const [showLocationUpdateDialog, setShowLocationUpdateDialog] = useState<boolean>(false);

  return (
    <>
      <LayoutProfileSection>
        <LayoutFormGroup type="닉네임">
          <div className={styles.dialog} onClick={() => setShowNicknameUpdateDialog(true)}>
            {profile.nickname}
          </div>
        </LayoutFormGroup>
        <LayoutFormGroup type="성별">남성</LayoutFormGroup>
        <LayoutFormGroup type="생일">
          <div className={styles.dialog} onClick={() => setShowBirthdayUpdateDialog(true)}>
            {profile.birthday}
          </div>
        </LayoutFormGroup>
        <LayoutFormGroup type="위치">
          <div className={styles.dialog} onClick={() => setShowLocationUpdateDialog(true)}>
            {profile.location}
          </div>
        </LayoutFormGroup>
      </LayoutProfileSection>

      <DialogWithTextField
        title="닉네임을 변경하시겠어요?"
        button="닉네임 변경"
        updateKey="nickname"
        value={profile.nickname}
        open={showNicknameUpdateDialog}
        onClose={() => setShowNicknameUpdateDialog(false)}
      />
      <DialogWithDatePicker value={profile.birthday} open={showBirthdayUpdateDialog} onClose={() => setShowBirthdayUpdateDialog(false)} />
      <DialogWithTextField
        title="위치를 입력해주세요"
        button="위치 변경"
        updateKey="location"
        value={profile.location}
        open={showLocationUpdateDialog}
        onClose={() => setShowLocationUpdateDialog(false)}
      />
    </>
  );
};

export default Primary;
