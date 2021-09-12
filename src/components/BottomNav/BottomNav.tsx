import { NavLink, useLocation } from 'react-router-dom';
import { LayoutBottomNav } from '../layout';
import Action from './Action';
import { ReactComponent as HomeInactive } from '../../assets/images/home-inactive.svg';
import { ReactComponent as HomeActive } from '../../assets/images/home-active.svg';
import { ReactComponent as ProfileInactive } from '../../assets/images/user-inactive.svg';
import { ReactComponent as ProfileActive } from '../../assets/images/user-active.svg';

const BottomNav: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <LayoutBottomNav>
        <li>
          <NavLink to="/">{location.pathname === '/' ? <HomeActive /> : <HomeInactive />}</NavLink>
        </li>
        <Action to="/" icon="menu" />
        <Action to="/" icon="like" />
        <Action to="/" icon="chat" />
        <li>
          <NavLink to="/profile">{location.pathname === '/profile' ? <ProfileActive /> : <ProfileInactive />}</NavLink>
        </li>
      </LayoutBottomNav>
    </>
  );
};

export default BottomNav;
