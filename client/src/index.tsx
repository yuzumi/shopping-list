import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';

import { Provider } from 'react-redux';
import store from 're-ducks/store';

import App from 'App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';

const Root: FunctionComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
