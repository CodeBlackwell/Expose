import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './src/reducers/rootReducer';

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__; // --> trash collection

const store = createStore(rootReducer, initialState);

import App from './src/containers/App/App';

hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));