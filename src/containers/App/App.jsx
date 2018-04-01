import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Switch, Route } from 'react-router-dom';

import { AppContainer } from './App.styles';

import Homepage from '../Homepage/Homepage';
import Landing from '../Landing/Landing';


export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AppContainer>
				<Helmet
					htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
					titleTemplate="%s | React App"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "Server side rendering"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>
				<Switch>
					<Route exact path='/' component={ Homepage } />
					<Route path="/landing" component={ Landing } />
				</Switch>
			</AppContainer>
		);
	}
}