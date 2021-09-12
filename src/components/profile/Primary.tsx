import { LayoutProfileSection, LayoutFormGroup } from '../layout';
// import styles from './Primary.module.scss';

const Primary: React.FC = () => {
  return (
    <LayoutProfileSection>
      <LayoutFormGroup type="닉네임">헬로티모</LayoutFormGroup>
      <LayoutFormGroup type="성별">남성</LayoutFormGroup>
      <LayoutFormGroup type="생일">1985-11-10</LayoutFormGroup>
      <LayoutFormGroup type="위치">서울 강남구</LayoutFormGroup>
    </LayoutProfileSection>
  );
};

export default Primary;
