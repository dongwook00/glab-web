import { LayoutProfileSection, LayoutFormGroup } from '../layout';
// import styles from './Tertiary.module.scss';

const Tertiary: React.FC = () => {
  return (
    <LayoutProfileSection>
      <LayoutFormGroup type="직장">
        <span>asd</span>
      </LayoutFormGroup>
      <LayoutFormGroup type="직업">
        <span>asd</span>
      </LayoutFormGroup>
      <LayoutFormGroup type="학력">
        <span>asd</span>
      </LayoutFormGroup>
      <LayoutFormGroup type="학교">
        <span>asd</span>
      </LayoutFormGroup>
    </LayoutProfileSection>
  );
};

export default Tertiary;
