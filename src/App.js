<<<<<<< HEAD
import React from 'react';
import './App.css';
import Gallery from './components/gallery/Gallery'

function App() {
    return ( 
        <div className = "App" >
        <Gallery / >
        </div>
    );
}

export default App;
=======
import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import LoggedIn from './LoggedIn';		

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					
					<div className="App">

						{/* <Route path="/onBoarding" component={OnBoarding} /> */}
						<LoggedIn exact path="/" component={HomePage} />
						{/* <LoggedIn path="/events/:category" component={Events} />
						<LoggedIn path="/guestLectures" component={Guests} />
						<LoggedIn path="/contactUs" component={Contact} />
						<LoggedIn path="/aboutUs" component={AboutUs} />
						<LoggedIn path="/sponsors" component={Sponsers} />
						<LoggedIn path="/user" component={User} /> */}
					
					</div>

				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
		
>>>>>>> f78d387e47a93acddeaf166136f1a7b65d323ea7
