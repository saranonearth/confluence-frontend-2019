import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';

class App extends Component {
	
	render() {
		return (
			<BrowserRouter>
			<div>
			
			<Switch>
			
				{/** Add you componenrs here */}
				<Route exact path='/' component={HomePage} />
			</Switch>
			
			</div>
			</BrowserRouter>
		);
	}
}

export default App;
	