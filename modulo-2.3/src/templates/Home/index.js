import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    setState({
      result: null,
      error: null,
      status: 'idle',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((error) => {
        setState({
          result: null,
          error: error,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  // useEffect(() => {
  //   reFetchData();
  // }, [reFetchData]);

  if (status === 'idle') {
    return <h1>Nada execultando</h1>;
  }
  if (status === 'pending') {
    return <h1>Loading...</h1>;
  }
  if (status === 'error') {
    return <h1>Error: {JSON.stringify(error, null, 2)}</h1>;
  }
  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
};
