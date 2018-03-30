import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

//const store = createStore(reducer);

ReactDOM.render(
  <App />,

  document.getElementById('root')
);
registerServiceWorker();
