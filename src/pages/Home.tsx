import { LayoutHomeContainer } from '../components/layout';
import { UserGallery } from '../components/users';
import { Tab } from '../components/tab';
import users from '../assets/dummydata/users';

const Home: React.FC = () => {
  return (
    <>
      <Tab />
      <LayoutHomeContainer>
        {users.map((user) => (
          <UserGallery key={user.id} user={user} />
        ))}
      </LayoutHomeContainer>
    </>
  );
};
export default Home;
