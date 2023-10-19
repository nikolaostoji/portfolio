import React, { lazy, Suspense } from 'react';

const LazySocials = lazy(() => import('./Socials'));

const Socials = props => (
  <Suspense fallback={null}>
    <LazySocials {...props} />
  </Suspense>
);

export default Socials;
