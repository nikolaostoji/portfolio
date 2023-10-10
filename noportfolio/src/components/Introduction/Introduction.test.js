import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './Introduction';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Introduction />, div);
  ReactDOM.unmountComponentAtNode(div);
});