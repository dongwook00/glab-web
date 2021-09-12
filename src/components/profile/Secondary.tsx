import { LayoutProfileSection, LayoutFormGroup } from '../layout';
import { useAppSelector } from '../../redux/hooks';

const Secondary: React.FC = () => {
  const profile = useAppSelector((state) => state.profile);
  return (
    <LayoutProfileSection>
      <LayoutFormGroup type="키">{profile.height}cm</LayoutFormGroup>
      <LayoutFormGroup type="체형">{profile.bodyType}</LayoutFormGroup>
    </LayoutProfileSection>
  );
};

export default Secondary;
