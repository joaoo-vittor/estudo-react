import { useEffect, useState } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChenge = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChenge);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChenge);
    };
  }, [queryValue]);

  return match;
};

export const Home = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width:767px) and (min-width: 322px)');
  const small = useMediaQuery('(max-width: 321px)');
  const background = huge ? 'green' : big ? 'red' : medium ? 'yellow' : small ? 'blue' : null;
  return <div style={{ fontSize: '60px', background }}>Oi</div>;
};
