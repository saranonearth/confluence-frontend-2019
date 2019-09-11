import React, { Component } from 'react';
import axios from 'axios';
import './gallery.css'

export default class Gallery extends Component {
    state = {
        images : []
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=4")
        .then(res => this.setState({ images : res.data }))
        .catch(err => console.log(err));
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
                    <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                        <img src={image.url} ></img>
                    </a>
                </div> 
            )
        });
        return (
            <div id="gallerySlider">
                <div className="galleryGrid">
                    {imageLinks}
                </div>
            </div>
        )
    }
}
