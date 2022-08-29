import PropTypes from 'prop-types';
import styles from '../ReviewsList/ReviewList.module.css';

export const ReviewsList = ({ array }) => {
  return array.map(({ id, author, content }) => (
    <li className={styles.item} key={id}>
      <p className={styles.author}>@{author}</p>
      <p className={styles.content}>{content}</p>
    </li>
  ));
};

ReviewsList.propTypes = {
  author: PropTypes.string,
  id: PropTypes.number,
  content: PropTypes.string,
};
