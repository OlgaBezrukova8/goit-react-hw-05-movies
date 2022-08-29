import { useState } from 'react';
import cssDiv from '../Container/Container.module.css';
import styles from '../SearchForm/SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ search: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ ...state });
    setState({ search: '' });
  };

  return (
    <form className={cssDiv.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChange}
        name="search"
        value={state.search}
        placeholder="Enter a movie title"
        required
      />

      <button className={styles.button}>Search</button>
    </form>
  );
};
