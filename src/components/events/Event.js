import React, { Component } from 'react';
import './event.css';
import { Button, Icon} from 'react-materialize';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';


export default class Event extends Component {

    render = () => {
        const categories = ["Cat1", "Cat2", "Cat3", "Cat4", "Cat5", "Cat6", "Cat7", "Cat8", "Cat9", "Cat10", "Cat11", "Cat12"]
        return (
            <Router>
                <div className="eventParentGrid">
                
                    <Route exact path="/" render={props =>(
                        <FirstPage categories={categories}/>
                    )}/>

                    <Route exact path="/SecondPage" render={props =>(
                        <SecondPage {...props} categories={categories}/>
                    )}/>

                </div>
            </Router>
        )
    }
}
