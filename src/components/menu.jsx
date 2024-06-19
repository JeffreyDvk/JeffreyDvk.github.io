import '../assets/scss/components/menu.scss'
import $ from 'jquery'; 

export default function Menu({moveToPage}){
    let move = (i)=>{
        $(".menu-container").removeClass("active")
        moveToPage(i)
    }
    return <div className="menu-container">
        <div className="menu">
            <div className="menu__line">
                <div className="menu__button" onClick={e=>{move(0)}}>
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-info-circle"></i></span>
                    <p className='menu__button__text'>Intro</p >
                </div>
            </div>
            <div className="menu__line">
                <div className="menu__button" onClick={e=>{move(1)}}>
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-person-workspace"></i></span>
                    <p className='menu__button__text'>Who I Am</p >
                </div>
                <div className="menu__button" onClick={e=>{move(3)}}>
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-trophy"></i></span>
                    <p className='menu__button__text'>My works</p >
                </div>
            </div>
            <div className="menu__line">
                <div className="menu__button">
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-emoji-sunglasses"></i></span>
                    <p className='menu__button__text'></p >
                </div>
                <div className="menu__button" onClick={()=>$(".menu-container").removeClass("active")}>
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-door-closed"></i></span>
                    <p className='menu__button__text' >Close</p >
                </div>
                <div className="menu__button">
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-emoji-wink"></i></span>
                    <p className='menu__button__text'></p >
                </div>
            </div>
            <div className="menu__line">
                <div className="menu__button">
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-book"></i></span>
                    <p className='menu__button__text'>Blog ( Coming Soon )</p >
                </div>
                <div className="menu__button" onClick={e=>{move(4)}}>
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-chat-dots"></i></span>
                    <p className='menu__button__text'>Wanna Call ?</p >
                </div>
            </div>
            <div className="menu__line">
                <div className="menu__button" onClick={e=>{move(2)}}>
                    <span className="menu__button__behind"></span>
                    <span className="menu__button__icon"><i className="bi bi-mortarboard"></i></span>
                    <p className='menu__button__text'>My path</p >
                </div>
            </div>
        </div>
    </div>
}