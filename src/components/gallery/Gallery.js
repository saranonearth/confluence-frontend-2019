import React, { Component } from 'react';
import axios from 'axios';
import './gallery.css'
//import Sponsor from '../../../../../React Tut/Template/sponsors/src/Components/sponsors/Sponsor';

export default class Gallery extends Component {
    state = {
        images : [],
        imageOnScreen : 0
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=10")
        .then(res => this.setState({ images : res.data }))
        .catch(err => console.log(err));
    }

    // imageShiftRight(){
    //     let galleryGrid = document.querySelector(".galleryGrid");
    //     galleryGrid.style.animationDuration = "5s";
    //     galleryGrid.style.animationDirection = "normal";
    // }
    // imageShiftLeft(){
    //     let galleryGrid = document.querySelector(".galleryGrid");
    //     galleryGrid.style.animationDelay = "2s";
    //     galleryGrid.style.animationDuration = "5s";
    //     galleryGrid.style.animationDirection = "reverse";
    // }
    // normalize(){
    //     let galleryGrid = document.querySelector(".galleryGrid");
    //     galleryGrid.style.animationDuration = "15s";
    //     galleryGrid.style.animationDirection = "normal";
    //     galleryGrid.style.animationDelay = "2s";
    // }
    resetImages = (e) => {
        console.log("inReset");
    }
    imageShiftRight = (e)=>{
        let images = document.querySelectorAll(".galleryGridComm");
        let next = (this.state.imageOnScreen+1), percent = next*100;
        let curr = "translateX(-" + percent.toString() + "%)";
        console.log(curr);
        // images[next-1].style.transition = "1s cubic-bezier(1,.01,.42,1.08)";
        // images[next-1].style.transform = curr;

        // images[next].style.transition = "1s cubic-bezier(.44,.22,.57,.94) 1s";
        // images[next%10].style.transform = curr;

        for(var i = next-1; i<9; ++i){
            images[i].style.transition = "1s cubic-bezier(1,.01,.42,1.08)";
            images[i].style.transform = curr;

            images[i+1].style.transition = "1s cubic-bezier(1,.01,.42,1.08)";
            images[i+1].style.transform = curr;
        }

        this.setState(prevImage => {
            let pre = Object.assign({}, prevImage);
            pre.imageOnScreen += 1;
            return(pre);
        });
        this.resetImages();
    }

    render() {

        if(this.state.images.length === 0){
            return(
                <React.Fragment></React.Fragment>
            )
        }


        //console.log(this.state.images);
        const imageLinks = this.state.images.map( (image,index) =>{
            return (
                <div className="galleryGridComm" key={image.id}>
                    <a href="http://www.youtube.com" rel="noopener noreferrer" target="_blank">
                        <img src={image.url}></img>
                    </a>
                    <p className="topText">Hi bro!!!</p>
                    {/* <p className="bottomText">How you been!!!</p> */}
                    <p style = {{color : "white"}}>{index}</p>
                </div> 
            )
        });
        return (
            <div id="gallerySlider">
                <div className="arrowLeft"  ></div>
                <div className="arrowRight" onClick={this.imageShiftRight}></div>
                <div className="galleryGrid" >
                    {imageLinks}
                </div>
            </div>
        )
    }
}
