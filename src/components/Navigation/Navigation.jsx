import { NavLink } from 'react-router-dom';
import { navLinks } from '../../components/Navigation/navLinks';
import styles from '../Navigation/Navigation.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const nav = navLinks.map(({ to, name }) => (
  <li key={name} className={styles.item}>
    <NavLink className={getClassName} to={to}>
      {name}
    </NavLink>
  </li>
));

export const Navigation = () => {
  return <ul className={styles.list}>{nav}</ul>;
};
