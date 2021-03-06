import P from 'prop-types';
import './App.css';
import { useEffect, useState, useMemo, useRef } from 'react';

const Post = ({ post, handleClick }) => {
  console.log('filho renderizou');

  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(null);

  console.log('pai renderizou');

  // ComponentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        return setPosts(resp);
      });
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Renderizou: {contador.current}</h1>

      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post post={post} key={post.id} handleClick={handleClick} />;
          })
        );
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não exitem posts.</p>}
    </div>
  );
}

export default App;
