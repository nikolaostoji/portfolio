import React from 'react';
import ReactDOM from 'react-dom';
import WorkSummary from './WorkSummary';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});