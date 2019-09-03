import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Title from './components/Title';
import renderer from 'react-test-renderer';
const http = require('http');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders correctly', () => {
  const tree = renderer
    .create(<Title>demo</Title>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
