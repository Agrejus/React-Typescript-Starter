import * as React from 'react';
import { render } from 'react-dom';
import { App } from './app/App';
import './index.scss';

render(
  <App />,
  document.getElementById('root') as HTMLElement
);