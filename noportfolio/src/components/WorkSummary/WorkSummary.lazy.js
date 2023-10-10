import React, { lazy, Suspense } from 'react';

const LazyWorkSummary = lazy(() => import('./WorkSummary'));

const WorkSummary = props => (
  <Suspense fallback={null}>
    <LazyWorkSummary {...props} />
  </Suspense>
);

export default WorkSummary;
