import PropTypes from 'prop-types';

export const ReviewsList = ({ array }) => {
  return array.map(({ id, author, content }) => (
    <li key={id}>
      <p>{author}</p>
      <p>{content}</p>
    </li>
  ));
};

ReviewsList.propTypes = {
  author: PropTypes.string,
  id: PropTypes.number,
  content: PropTypes.string,
};
