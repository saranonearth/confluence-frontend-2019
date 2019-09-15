// import React, { Component } from 'react'
// import { Button, Icon} from 'react-materialize';

// export default class SecondPage extends Component {
//     render() {
//         const categoryIndex = this.props.categoryIndex;
//         console.log(categoryIndex);
//         return (
//             <React.Fragment>
                // <div className = "galleryGrid"> 

                //     <Button
                //         floating
                //         large
                //         className="green"
                //         waves="light"
                //         icon={<Icon>keyboard_arrow_left</Icon>}
                //         onClick ={this.props.prevCategory.bind(this, this.props.categoryIndex)}
                //     />

                //     <div>
                //         <img src = {this.props.category.url} width = "200px" height = "200px" ></img>
                //     </div>

                //     <div>
                //         <Button
                //             floating
                //             large
                //             className="green"
                //             waves="light"
                //             icon={<Icon>keyboard_arrow_right</Icon>}
                //             onClick ={this.props.nextCategory.bind(this, this.props.categoryIndex)}
                //         />
                //     </div>

                // </div>

                // <div>
                //     <Button 
                //         waves="light" 
                //         style={{marginRight: '5px'}}
                //         onClick={this.props.goToThirdPage.bind(this, this.props.categoryIndex)}>
                //         EVENTS
                //     </Button>
                // </div>
//             </React.Fragment>
            
//         )
//     }
// }


import React, { Component } from 'react'
import { Button, Icon} from 'react-materialize';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class SecondPage extends Component {
    state = {
        currentCateogryIndex : -1,
        events : [],
        sz : 12
    }

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=12")
        .then(res => this.setState({ events : res.data }))
        .catch(err => console.log(err));

        this.setState(preState => {
            let prev =Object.assign({}, preState);
            prev.currentCategoryIndex = this.props.location.state.categoryIndex;
            return(prev);
        });
    }

    nextCategory = () =>{
        this.setState(preState => {
            let prev =Object.assign({}, preState);
            prev.currentCategoryIndex = (prev.currentCategoryIndex + 1)%(prev.sz);
            return(prev);
        });
    }

    prevCategory = () =>{
        this.setState(preState => {
            let prev =Object.assign({}, preState);
            prev.currentCategoryIndex = prev.currentCategoryIndex === 0 ? prev.sz - 1: prev.currentCategoryIndex-1;
            return(prev);
        });
    }

    render() {
        if(this.state.events.length === 0){
            return(
                <React.Fragment></React.Fragment>
            );
        }
        
        const categories = this.props.categories,
        {currentCategoryIndex, events} = this.state;

        return (
            <React.Fragment>
                <Link to="/">
                    <Button
                        floating
                        large
                        className="red backButton"
                        waves="light"
                        icon={<Icon>arrow_back</Icon>}
                    />
                </Link>

                <div>
                    {categories[currentCategoryIndex]}
                </div>

                <div className="secondPageGrid">
                    <div className = "galleryGrid"> 

                        <Button
                            floating
                            large
                            className="green"
                            waves="light"
                            icon={<Icon>keyboard_arrow_left</Icon>}
                            onClick={this.prevCategory}
                        />

                        <div>
                            <img src = {events[currentCategoryIndex].url} width = "200px" height = "200px" ></img>
                        </div>

                        <div>
                            <Button
                                floating
                                large
                                className="green"
                                waves="light"
                                icon={<Icon>keyboard_arrow_right</Icon>}
                                onClick={this.nextCategory}
                            />
                        </div>
                    </div>

                    <Button 
                        waves="light" 
                        style={{marginRight: '5px'}}>
                        EVENTS
                    </Button>

                </div>
            </React.Fragment>
        )
    }
}

