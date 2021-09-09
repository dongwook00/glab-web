import { NavLink } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';
import styles from './Action.module.scss';

interface ActionProps {
  to: string;
  icon: string;
}

const Action: React.FC<ActionProps> = (props) => {
  return (
    <li className={styles.icons}>
      <NavLink to={props.to}>
        <svg>
          <use href={`${sprite}#${props.icon}`} />
        </svg>
      </NavLink>
    </li>
  );
};

export default Action;
