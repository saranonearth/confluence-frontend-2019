import React, { Component } from 'react';
import './event.css';

export default class CategoryCard extends Component {
    render() {
        return (
            <div className="categoryCardsGrid">
                <div>
                    <p style={{fontSize:"15px"}}>{this.props.category}</p>
                </div>
            </div>
        )
    }
}
