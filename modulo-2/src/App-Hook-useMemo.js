import P from 'prop-types';
import './App.css';
import { useEffect, useState, useMemo } from 'react';

const Post = ({ post }) => {
  console.log('filho renderizou');

  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

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

  return (
    <div className="App">
      <h1>Oi</h1>

      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })
        );
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não exitem posts.</p>}
    </div>
  );
}

export default App;
