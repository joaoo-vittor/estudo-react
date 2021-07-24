import P from 'prop-types';
import './style.css';

export const PostCard = ({ cover, body, title }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
};
