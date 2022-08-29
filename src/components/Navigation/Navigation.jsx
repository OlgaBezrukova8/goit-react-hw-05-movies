import { NavLink } from 'react-router-dom';
import { navLinks } from '../../components/Navigation/navLinks';
import styles from '../Navigation/Navigation.module.css';
import { getNavigationClassName } from '../../functions/getNavigationClassName';

const nav = navLinks.map(({ to, name }) => (
  <li key={name} className={styles.item}>
    <NavLink className={getNavigationClassName} to={to}>
      {name}
    </NavLink>
  </li>
));

export const Navigation = () => {
  return <ul className={styles.list}>{nav}</ul>;
};
