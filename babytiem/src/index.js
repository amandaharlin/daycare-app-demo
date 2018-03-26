import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
//import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

//const store = createStore(reducer);

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  //  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
