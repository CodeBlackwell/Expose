import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { ServerStyleSheet } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import rootReducer from './src/reducers/rootReducer';
import Template from './template';
import App from './src/containers/App/App';

const initState = fromJS({ application: { profiles: [] }});

export default function serverRenderer({ clientStats, serverStats }) {
	return (req, res, next) => {
		const context = {};
        const sheet = new ServerStyleSheet();
		let initialState = rootReducer(initState);
        const store = createStore(rootReducer, initialState);

        const body = ReactDOMServer.renderToString(
            sheet.collectStyles(
            	<Provider store={ store }>
					<StaticRouter location={ req.url } context={ context }>
						<App />
					</StaticRouter>
				</Provider>
			)
		);
		initialState = store.getState();
        const styles = sheet.getStyleTags();
        const helmet = Helmet.renderStatic();

		res.status(200).send(Template({
			initialState,
			styles,
			body,
            helmet
		}));
	};
}