import React from 'react';
import ReactDOM from 'react-dom';
import PersonalProjects from './PersonalProjects';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalProjects />, div);
  ReactDOM.unmountComponentAtNode(div);
});