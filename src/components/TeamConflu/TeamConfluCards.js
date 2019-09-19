import React, { Component } from 'react'
import anime from './anime.es';
import './TeamConflu.css'

export default class TeamConfluCards extends Component {
    mouseEnterAnim = (index) => {
		const hoverTarget = '.card'+index, imgTarget = '.img'+index, img= document.querySelector(imgTarget);


		img.style.transition = "100ms";
		img.style.transform = "scale(1.15)";
	
		anime.remove(hoverTarget);
		anime({
			targets: hoverTarget,
			scale: 1.07,
		})
		anime.remove(imgTarget);
		anime({
			targets: imgTarget,
			duration: 500,
			rotate : "1turn",
			easing :"easeInOutCubic"
		})
	}
	mouseLeaveAnim = (index) => {
		const hoverTarget = [ ('.card'+index), '.show'], imgTarget = '.img'+index, img = document.querySelector(imgTarget);

		img.style.transition = "100ms";
		img.style.transform = "scale(1)";

		anime.remove(hoverTarget);
		anime({
			targets: hoverTarget,
			scale:1
		});
		anime.remove(imgTarget);
		anime({
			targets: imgTarget,
			duration: 200,
			rotate: "1turn",
			direction : "reverse",
			easing :"easeInOutCubic"
		});
	}
    
    render = () => {
        const {memberName, imgUrl, i} = this.props,
        colors=[
			{init:"#D21DB0",final:"#9133BF"},
			{init:"#FFB707",final:"#FF6401"},
			{init:"#00FDFD",final:"#00C6FC"}
		],
		linearGradient =[
			"linear-gradient(45deg,#D21DB0, #9133BF)",
			"linear-gradient(45deg,#FFB707, #FF6401)",
			"linear-gradient(45deg,#00FDFD, #00C6FC)"
        ];
        
        console.log(memberName);
        return (
            <div className={'card card'+i} onMouseEnter={this.mouseEnterAnim.bind(this, i)} onMouseLeave={this.mouseLeaveAnim.bind(this, i)}>
                <div className='show' style={{backgroundImage: linearGradient[i%colors.length]}}></div>
                <div className='card-content'>
                    <img src={imgUrl} className={"img" + i}/>
                    <h5 style={{color:colors[i % colors.length].init}}> {memberName} </h5>
                    <div className='social'>
                        <a href="#" className={'fab fa-facebook'}></a>
						<a href="#" className={'fab fa-github'}></a>
						<a href="#" className={'fab fa-instagram'}></a>
                    </div>
                </div>
            </div>
        )
    }
}
