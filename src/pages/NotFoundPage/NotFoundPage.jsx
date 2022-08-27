import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>Ooops, page not found.</h2>
      <p>
        Please, go back to the
        <Link to="/">Home</Link> page :)
      </p>
    </div>
  );
};

export default NotFoundPage;
