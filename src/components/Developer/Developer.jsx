import React , {Components} from 'react';
import './dev.css';
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css";

class Card extends React.Component{
  render(){
    return(
        <div className="card">
        <div className="info">
        <div className="name">
            USER NAME
        </div>
        <div className="prof">
            Designer
        </div>
        <div className="divider"></div>

        <div className="git-icon">
                <i className="fa fa-github"></i>
        </div>
        <div className="photo">
            <img className="image" src="pg3.jpg" />                  
        </div>
        
    </div>
    </div>
    );
  }
}

const Developer = () => {
  return (
    <>
    <div className="heading"><img src="DevelopersText_1.svg" alt="" /></div>
    <div className="cards">
        <Card />    
      </div> 
      
    </>
  );
};

export default Developer;

