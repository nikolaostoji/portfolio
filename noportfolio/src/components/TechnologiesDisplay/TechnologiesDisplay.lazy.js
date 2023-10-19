import React, { lazy, Suspense } from 'react';

const LazyTechnologiesDisplay = lazy(() => import('./TechnologiesDisplay'));

const TechnologiesDisplay = props => (
  <Suspense fallback={null}>
    <LazyTechnologiesDisplay {...props} />
  </Suspense>
);

export default TechnologiesDisplay;
