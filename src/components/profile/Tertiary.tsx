import { LayoutProfileSection, LayoutFormGroup } from '../layout';
import { useAppSelector } from '../../redux/hooks';

const Tertiary: React.FC = () => {
  const profile = useAppSelector((state) => state.profile);
  return (
    <LayoutProfileSection>
      <LayoutFormGroup type="직장">{profile.jobName}</LayoutFormGroup>
      <LayoutFormGroup type="직업">{profile.jobField}</LayoutFormGroup>
      <LayoutFormGroup type="학력">{profile.education}</LayoutFormGroup>
      <LayoutFormGroup type="학교">{profile.school}</LayoutFormGroup>
    </LayoutProfileSection>
  );
};

export default Tertiary;
