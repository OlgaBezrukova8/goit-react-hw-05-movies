export const ReviewsList = ({ array }) => {
  return array.map(({ id, author, content }) => (
    <li key={id}>
      <p>{author}</p>
      <p>{content}</p>
    </li>
  ));
};
