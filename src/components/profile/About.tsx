import { useState } from 'react';
import { LayoutProfileSection } from '../layout';
import { useAppSelector } from '../../redux/hooks';
import { FullDialogWithTextarea } from '../common';
import styles from './About.module.scss';

const About: React.FC = () => {
  const profile = useAppSelector((state) => state.profile);
  const [showAboutUpdateDialog, setShowAboutUpdateDialog] = useState<boolean>(false);

  return (
    <>
      <LayoutProfileSection>
        <div className={`${styles.about} ${styles.type}`}>소개</div>
        <p className={`${styles.about} ${styles.value}`} onClick={() => setShowAboutUpdateDialog(true)}>
          {profile.about === null ? `회원님의 매력을 간단하게 소개해주세요` : <pre>{profile.about}</pre>}
        </p>
        <p className={`${styles.about} ${styles.info}`}>SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다</p>
      </LayoutProfileSection>
      <FullDialogWithTextarea value={profile.about || ''} open={showAboutUpdateDialog} onClose={() => setShowAboutUpdateDialog(false)} />
    </>
  );
};

export default About;
