import { LayoutBottomNav } from '../layout';
import Action from './Action';

const BottomNav: React.FC = () => {
  return (
    <>
      <LayoutBottomNav>
        <Action to="/" icon="like" />
        <Action to="/" icon="menu" />
        <Action to="profile" icon="like" />
        <Action to="/" icon="chat" />
        <Action to="profile" icon="user" />
      </LayoutBottomNav>
    </>
  );
};

export default BottomNav;
