import { LayoutProfileContainer, LayoutProfileHeader, LayoutProfileMain } from '../components/layout';
import { Header } from '../components/profile';
import { Images, Information } from '../components/profile';

const Profile: React.FC = () => {
  return (
    <>
      <LayoutProfileContainer>
        <LayoutProfileHeader>
          <Header />
        </LayoutProfileHeader>
        <LayoutProfileMain>
          <Images />
          <Information />
        </LayoutProfileMain>
      </LayoutProfileContainer>
    </>
  );
};

export default Profile;
