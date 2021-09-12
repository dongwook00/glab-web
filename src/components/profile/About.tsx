import { LayoutProfileSection } from '../layout';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <LayoutProfileSection>
      <div className={styles.type}>소개</div>
      <p className={styles.value}>회원님의 매력을 간단하게 소개해주세요</p>
      <p className={styles.info}>SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다</p>
    </LayoutProfileSection>
  );
};

export default About;
