import React from 'react'
import $ from 'jquery'; 
import anime from 'animejs/lib/anime.es.js';


const links = ['Intro','Who I Am','My path','My Works','Wanna Call ?']
class Navbar extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            animes: null,
        }
    }

    componentDidMount(){
        let anim = anime.timeline({
            easing: 'easeInOutExpo',
            duration: 100,     
            autoplay:false       
        })
        .add({
            targets: ".menu__button",
            translateX: "100vw",
            rotate: "-45deg",
        })
        .add({
            delay: anime.stagger(100),
            duration: 2000,
            targets: ".menu__button",
            translateX: 0,
        })
        this.setState({animes: anim})
        $('.navbar__links__item:first-of-type i').removeClass("bi-diamond").addClass("bi-diamond-fill")
        $(".navbar__links__item:first-of-type .navbar__links__link").addClass('active')

        

    }
    switchMenu = ()=>{
        this.state.animes.play()
        $(".menu-container").hasClass("active") ? $(".menu-container").removeClass("active") : $(".menu-container").addClass("active")
    }
    move = (i)=>{
        this.props.moveToPage(i)
    }

    render(){ 
        return <nav className='navbar'>
            <img data-aos="zoom-in" className="navbar__logo" src="logo.png" alt="me"/>
            <div className='navbar__links'>
                {links.map((l,i)=> 
                <li key={i} className='navbar__links__item' data-aos="fade-right" data-aos-delay={i*200} >
                    <i className='bi bi-diamond'></i>
                    <a onClick={e=>{this.move(i)}} id={i} href="#"className='navbar__links__link'>{l}</a>
                </li> )}
            </div>
            <button  className="navbar__menu-trigger" onClick={this.switchMenu}>
                <i className="bi bi-three-dots"></i>
            </button>
        </nav>
    }
}

export default Navbar;
