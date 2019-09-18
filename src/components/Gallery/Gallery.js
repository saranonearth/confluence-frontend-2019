import React , {Components} from 'react';
import './style.css';

class Slide extends React.Component{
  render(){
    return(
      <div className="slide pause">
        <div className="bg pause">
        </div>
      </div>
    );
  }
}

class Gallery extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="slides pause">
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <div class="shutter pause">      
          </div>
        </div>
      </div> 
    );
  }
}

export default Gallery;
