import React from 'react'
import anime from 'animejs/lib/anime.es.js';
import '../assets/scss/components/loader.scss'

export default class Loader extends React.Component{

    constructor(props){
        super(props)
        this.anime = null
    }
    componentDidMount(){
        this.anime = anime({
            easing: 'easeInOutExpo',
            delay: anime.stagger(100),
            duration: 3000,
            targets: ".loader__circle",
            rotate: [0,720],
            loop: true
        });
    }
    componentWillUnmount(){
        this.anime.remove(".loader__circle")
    }
    render(){
        let ld = []
        for(let i=1;i<=6;i++){
            let style = {
                padding: (10 * i)+"px",
                borderColor: "#E4D8F2"
            }
            ld.push(<div key={i}  style={style} className={"loader__circle"}> </div>)
        }
        return <div className='loader'>
            {ld.map(c => c)}
            <button onClick={this.props.hide} className='loader__trigger'>Press to Enter<br/>My World</button>
        </div>
    }
}