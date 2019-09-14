import React, { Component } from 'react';
import './event.css';

export default class CategoryCard extends Component {
    render() {
        return (
            <div className="categoryCardsGrid" onClick={this.props.onClick.bind(this, this.props.category.title, this.props.categoryIndex)}>
                <div> 
                    <img src={this.props.category.url} width="50px" height="50px" ></img>
                </div>

                <div>
                    <p style={{fontSize:"10px"}}>{this.props.category.title}</p>
                </div>
            </div>
        )
    }
}
