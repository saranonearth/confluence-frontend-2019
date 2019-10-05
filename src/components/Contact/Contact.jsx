import React , {Components} from 'react';
import './contact.css';

class Card extends React.Component{
  render(){
    return(
        <div className="card">
            <div className="image">
                <img src="pg3.jpg" />
            </div>
            <div className="top">
                <div>
                    <h1>USER NAME</h1>
                    <h2>President</h2>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>
                        Contact No- 1234567890
                    </h3>
                </div>
            </div>
        </div>
    );
  }
}

const Contact = () => {
  return (
    <>
       <div className="heading"><img src="TeamConfluText.svg" /></div>
      <div className="cards">
        <Card />    
      </div> 
    </>
  );
};

export default Contact;

