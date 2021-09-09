import { LayoutProfileHeader, LayoutProfileMain } from '../components/layout';
import { Header } from '../components/profile';
import { Images, Information } from '../components/profile';

const Profile: React.FC = () => {
  return (
    <>
      <LayoutProfileHeader>
        <Header />
      </LayoutProfileHeader>
      <LayoutProfileMain>
        <Images />
        <Information />
      </LayoutProfileMain>
    </>
  );
};

export default Profile;
