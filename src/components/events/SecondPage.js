import React, { Component } from 'react'
import { Button, Icon} from 'react-materialize';

export default class SecondPage extends Component {
    render() {
        const categoryIndex = this.props.categoryIndex;
        console.log(categoryIndex);
        return (
            <React.Fragment>
                <div className = "galleryGrid"> 

                    <Button
                        floating
                        large
                        className="green"
                        waves="light"
                        icon={<Icon>keyboard_arrow_left</Icon>}
                        onClick ={this.props.prevCategory.bind(this, this.props.categoryIndex)}
                    />

                    <div>
                        <img src = {this.props.category.url} width = "200px" height = "200px" ></img>
                    </div>

                    <div>
                        <Button
                            floating
                            large
                            className="green"
                            waves="light"
                            icon={<Icon>keyboard_arrow_right</Icon>}
                            onClick ={this.props.nextCategory.bind(this, this.props.categoryIndex)}
                        />
                    </div>

                </div>

                <div>
                    <Button 
                        waves="light" 
                        style={{marginRight: '5px'}}
                        onClick={this.props.goToThirdPage.bind(this, this.props.categoryIndex)}>
                        EVENTS
                    </Button>
                </div>
            </React.Fragment>
            
        )
    }
}
