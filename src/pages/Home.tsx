import { LayoutHomeContainer } from '../components/layout';
import { UserGallery } from '../components/users';
import { Tab } from '../components/tab';

const Home: React.FC = () => {
  return (
    <>
      <Tab />
      <LayoutHomeContainer>
        <UserGallery />
        <UserGallery />
        <UserGallery />
      </LayoutHomeContainer>
    </>
  );
};
export default Home;
