import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { ServerStyleSheet } from 'styled-components';

import Template from './template';
import App from './src/containers/App/App';

export default function serverRenderer({ clientStats, serverStats }) {
	return (req, res, next) => {
		const context = {};
        const sheet = new ServerStyleSheet();
        const body = ReactDOMServer.renderToString(
            sheet.collectStyles(
			<StaticRouter location={ req.url } context={ context }>
				<App />
			</StaticRouter>
			)
		);
        const styles = sheet.getStyleTags();

        const helmet = Helmet.renderStatic();

		res.status(200).send(Template({
			styles,
			body,
            helmet,
		}));
	};
}