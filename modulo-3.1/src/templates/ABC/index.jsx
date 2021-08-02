import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export const Abc = () => {
  const { slug, id } = useParams();
  // const location = useLocation();
  // const history = useHistory();
  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push('/');
  //   }, 3000);
  // }, [history]);

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};
