import React, { useState, Suspense } from 'react';
// import { LazyComponent } from './lazy_component';

const laodComponent = () => {
  console.log('Componente carregando!!!');
  return import('./lazy_component');
};
const LazyComponent = React.lazy(laodComponent);

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={laodComponent} onClick={() => setShow((s) => !s)}>
          Show {show ? 'On' : 'Off'}
        </button>
      </p>
      <Suspense fallback={<p>Loading...</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};
