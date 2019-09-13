import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Guests from './components/Guests/Guests';
import Contact from './components/Contact/Contact';
import Sponsors from './components/Sponsors/Sponsors';
import User from './components/User/User';
import LoggedIn from './LoggedIn';		

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					
					<div className="App">

						{/* <Route path="/onBoarding" component={OnBoarding} /> */}
						<LoggedIn exact path="/" component={HomePage} />
						{/* <LoggedIn path="/events/:category" component={Events} />*/}
						<LoggedIn path="/guestLectures" component={Guests} />
						<LoggedIn path="/contactUs" component={Contact} />
						<LoggedIn path="/aboutUs" component={AboutUs} />
						<LoggedIn path="/sponsors" component={Sponsors} />
						<LoggedIn path="/user" component={User} /> 
					
					</div>

				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
		