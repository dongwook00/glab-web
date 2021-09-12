import { LayoutProfileSection, LayoutFormGroup } from '../layout';
// import styles from './Secondary.module.scss';

const Secondary: React.FC = () => {
  return (
    <LayoutProfileSection>
      <LayoutFormGroup type="키">171cm</LayoutFormGroup>
      <LayoutFormGroup type="체형">보통</LayoutFormGroup>
    </LayoutProfileSection>
  );
};

export default Secondary;
