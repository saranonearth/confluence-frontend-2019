import React, { Component } from 'react'
import CategoryCard from './CategoryCard'
import {Link} from 'react-router-dom'

export default class FirstPage extends Component {
    render() {
        const {categories} = this.props,
        mainContent = categories.map((category, index) =>{
            return(
                <Link to={{
                    pathname : "/SecondPage",
                    state : {
                        categoryIndex: index,
                    } 
                }} key={index}>
                    <CategoryCard
                        category={category}
                    />
                
                </Link>
            )
        });

        return (
            <React.Fragment>
                <div>EVENTS</div>
                <div className="firstPageGrid">
                    {mainContent}
                </div>
            </React.Fragment>
        )
    }
}
