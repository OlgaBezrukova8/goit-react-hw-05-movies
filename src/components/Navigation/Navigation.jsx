import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

export const Navigation = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink className={getClassName} to="/">
          Home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={getClassName} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
