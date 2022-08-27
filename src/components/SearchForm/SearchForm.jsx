import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="search"
        value={state.search}
        placeholder="..."
        required
      />
      <button>Search</button>
    </form>
  );
};
