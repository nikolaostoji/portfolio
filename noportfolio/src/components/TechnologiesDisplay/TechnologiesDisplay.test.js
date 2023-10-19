import React from 'react';
import ReactDOM from 'react-dom';
import TechnologiesDisplay from './TechnologiesDisplay';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TechnologiesDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});