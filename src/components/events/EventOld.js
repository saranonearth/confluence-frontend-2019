import React, { Component } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import './event.css'
import { Button, Icon} from 'react-materialize';
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


export default class Event extends Component {
    state = {
        presentCategory : "Events",   // Will work as heading
        categories : [], // Will contain category name and stuff and also the list of events  
        onFirstPage : true,
        onSecondPage : false,
        onThirdPage : false,

        categoryIndex : 0,
        eventIndex : 0,
        sz : 12
    }

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res => this.setState({ categories : res.data }))
        .catch(err => console.log(err));
    }

    //--------------------------------------------------------------------------------Navigation---------------------------------------------------------------------------------------//
    goToFirstPage = () => {
        this.setState(preState => {
            let pre =Object.assign({}, preState);
            pre.onSecondPage = !pre.onSecondPage;
            pre.onFirstPage = !pre.onFirstPage;
            pre.presentCategory = "Events";
            pre.categoryIndex = 0;
            return(pre);
        });
        document.querySelector('.backButton').style.display = "none";
    }

    goToSecondPage = (title, categoryIndex) => {
        this.setState(prevState => {
            let pre = Object.assign({}, prevState);
            pre.presentCategory = title;
            pre.onSecondPage = !pre.onSecondPage;
            pre.onFirstPage = !pre.onFirstPage;
            pre.categoryIndex = categoryIndex;
            return(pre);
        });

        document.querySelector('.backButton').style.display = "block";
    }

    goToThirdPage = (categoryIndex) => {
        console.log("Hi there at third page");
    }

    nextCategory = (categoryIndex) =>{
        this.setState(preState => {
            let pre =Object.assign({}, preState);
            pre.categoryIndex = (categoryIndex+1)%(this.state.sz);
            console.log(pre.categoryIndex);
            pre.presentCategory = pre.categories[(categoryIndex+1)%(this.state.sz) ].title;
            return(pre);
        });
    }

    prevCategory = (categoryIndex) => {
        this.setState(preState => {
            let pre =Object.assign({}, preState);
            categoryIndex = categoryIndex === 0 ? this.state.sz-1 : categoryIndex - 1;
            pre.categoryIndex = categoryIndex;
            console.log(pre.categoryIndex);
            pre.presentCategory = pre.categories[categoryIndex].title;
            return(pre);
        });
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


    render = () => {
        //To take from api
        const heading = this.state.presentCategory;
        let contentMain;
        if(this.state.onFirstPage){
            contentMain = this.state.categories.map( (category, index) => {
                return(
                    <CategoryCard 
                        key={category.id} 
                        category={category} 
                        onClick={this.goToSecondPage} 
                        categoryIndex={index}
                    />
                )
            }).slice(0,this.state.sz);

        }
        else if(this.state.onSecondPage){
            let categoryIndex = this.state.categoryIndex;
            contentMain = (<SecondPage 
                                category={(this.state.categories[categoryIndex])} 
                                categoryIndex = {categoryIndex} 
                                nextCategory={this.nextCategory} 
                                prevCategory={this.prevCategory}
                                goToThirdPage={this.goToThirdPage}
                            />);
        }
        else if(this.state.onThirdPage){
            contentMain = () => {
                return(
                    <ThirdPage />
                )
            }
        }
        

        if(this.state.categories.length === 0){
            return (
                <React.Fragment></React.Fragment>
            )
        }

        let page, class_Name = ["firstPageGrid", "secondPageGrid", "thirdPageGrid"];
        if(this.state.onFirstPage)
            page = 0;
        else if(this.state.onSecondPage)
            page = 1;
        else if(this.state.onThirdPage)
            page = 2;

        //console.log(contentMain);
        return (
            <div className="eventParentGrid">
                <Button
                    floating
                    large
                    className="red backButton"
                    waves="light"
                    icon={<Icon>arrow_back</Icon>}
                    onClick = {this.goToFirstPage}
                    style={{display : "none"}}
                />

                <div className="eventHeading">
                    {heading}
                </div>
            
                <div>
                    <div className={class_Name[page]}>
                        {contentMain}
                    </div>
                </div>

            </div>
        )
    }
}
