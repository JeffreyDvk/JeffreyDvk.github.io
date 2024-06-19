/* Styles */
import './assets/scss/main.scss'

/* Components */
import Loader from './components/loader'
import Menu from './components/menu'
import Navbar from './components/navbar'

/* Libraries */
import React, { useEffect, useState } from 'react'
import $ from 'jquery'; 
import VanillaTilt from 'vanilla-tilt';
import AOS from 'aos';
import "aos/dist/aos.css";

function App(){

    /*Loader part*/
    const [displayLoader,swicthLoader] = useState([])
    const [page,setPage] = useState(0)
    
    useEffect(()=>{
        window.addEventListener('load', ()=>{
            $(".loader__circle").each(function(i,c){
                $(this).css('padding',`${95*i}px`)
            })
            $(".loader__trigger").css("display","block")
            setTimeout(()=>{
                $(".loader__trigger").css("opacity",1)
            },1000)
            VanillaTilt.init(document.querySelectorAll(".project"),{
                speed: 500,
            })
        });
    },[])
    function hideLoader(){
        $(".loader").css('transform',"scale(4)")
        $(".loader").css('opacity',0)
        AOS.init({
            duration: 1500
        });
        setTimeout(()=>{
            swicthLoader(false)
        },1000)
    }
    /* Page controller */
    

    let moveToPage = (p)=>{
        p = p === -1 ? page+1 : ( p === -2 ? page-1 : p )
        console.log(p)
        if( p >=0 || p<=4){
            let duration = 1000 * Math.abs(page - p)
            setPage(p)
            $(".navbar__links__link.active")
                .removeClass("active")
            $(".bi-diamond-fill")
                .removeClass("bi-diamond-fill")
                .addClass("bi-diamond")
            $($(`.navbar__links__link`)
                .get(p)).addClass("active")
                .parent().children("i")
                    .removeClass("bi-diamond")
                    .addClass("bi-diamond-fill")
            $('html, body').animate({
                scrollTop: $($(".page").get(p)).offset().top,
            }, duration );
            setTimeout(()=>{
                AOS.init()
            },duration)
        }
    }

    function Move({direction}){
        return <button 
            onClick={()=>moveToPage( direction === "down" ? -1 : -2)}  
            className={'move move--'+direction} >
                <i className={"bi bi-" + (direction ==="up" ? "arrow-up" : "mouse-fill")}></i>
                {direction ==="up" ? "Previous" : "Next"} Section
                <i className={"bi bi-" + (direction !== "up" ? "arrow-down" : "mouse-fill")}></i>
        </button>
    }
    return <>
        {displayLoader && <Loader hide={hideLoader} /> }
        <Menu moveToPage={moveToPage}/>
        {<Navbar moveToPage={moveToPage}/>}
        
        <main >
            <div className='pages' >
                <Move direction="up"/>  
                <div className='page page--home ' >
                    <div className='page__content'>
                        <h4 data-aos="fade-right" className='with-tag' data-tag="h4" >Hi you and welcome to my portfolio website !!<br/>If you're here it's mean you want to discover who I am.<br/>Soooo , let's begin ...</h4>
                        <p data-aos="fade-right" data-aos-delay="300">Tip: Click on the button in the bottom right corner to move</p>
                    </div>
                </div>
                <div className='page page--who' id="1" >
                    <div className='page__content'>
                        <h4 >Re-hi, I'm</h4>
                        <h2 className="with-tag" data-tag="author">Jeffrey DAVAKAN ( alias LoKiD )</h2>
                        <p className="page--who__description" >I'm a software engineer , actually working as a Freelance Full Stack Web Developer ( and occasionaly designing ).<br/>Giving to websites the necessary assets for a better UX and quality UI is what excites me the most.</p>
                        
                        <div className='with-tag quiz' data-tag="Quiz">
                            <h4   >What can a “full-stack web developer” do, you ask?</h4>
                            <p >
                                I can conjur a website from nothing into existence, fully formed. I do not use tricks, nor is this magic. I specialize in manipulating the very fabric of the web, its raw materials of HTML, CSS and JavaScript. Linux servers serve me, domains are my domain, and certificates are certain.<br/><br/>
                                A full-stack developer knows no bounds. And when they find one they cross it without hesitation, boldly going into the unknown to return richer for it.
                            </p>
                        </div>
                        <div className='with-tag quiz' data-tag="Quiz">
                            <h4  > What technologies or methods I use ?", you said ???   </h4>
                            <p  >Here are the technologies and methods i've been working with recently</p>
                            <div className='skills'>
                                <div className="skills__group " >
                                    <p>LANGAGES</p>
                                    <ul >
                                        <li className='skill'>JavaScript (ES6+)</li>
                                        <li className='skill'>CSS3 ( SCSS)</li>
                                        <li className='skill'>HTML5( Twig,EJS)</li>
                                        <li className='skill'>PHP</li>
                                        <li className='skill'>Python</li>
                                    </ul>
                                </div>
                                <div className="skills__group " >
                                    <p>METHODS & TOOLS</p>
                                    <ul >
                                        <li className='skill'>SMACSS ( BEM + ITCSS)</li>
                                        <li className='skill'>Webpack, NPM Scripts, Yarn</li>
                                        <li className='skill'>Accessibility testing</li>
                                        <li className='skill'>Responsive thinking</li>
                                    </ul>
                                </div>
                                <div className="skills__group " >
                                    <p>FRAMEWORKS , CMS & LIBS</p>
                                    <ul >
                                        <li className='skill'>MERN ( MongoDB + ExpressJs + ReactJs + Node.Js +</li>
                                        <li className='skill'>Wordpress</li>
                                        <li className='skill'>jQuery</li>
                                        <li className='skill'>Bootstrap</li>
                                    </ul>
                                </div>
                                <div className="skills__group " >
                                    <p>ADDITIONAL</p>
                                    <ul >
                                        <li className='skill'>Performance Optimisation</li>
                                        <li className='skill'>Figma</li>
                                        <li className='skill'>Agile Workflows</li>
                                        <li className='skill'>Search Engine Optimisation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='with-tag quiz' data-tag="Quiz">
                            <h4  >Apart from these technical skills, what are my qualities?</h4>
                            <p  >Without wanting to brag, I consider:</p>
                            <ul>
                                <li className="quality "  ><i className='bi bi-check-all'></i>That I am a responsible and rigorous person</li>
                                <li className="quality "  ><i className='bi bi-check-all'></i>That I have the skills to manage a team and a project</li>
                                <li className="quality "  ><i className='bi bi-check-all'></i>That I am able to withstand pressure and do my job with a smile</li>
                                <li className="quality "  ><i className='bi bi-check-all'></i>And finally, that I always give myself the necessary means to achieve my goals</li>
                            </ul>
                        </div>
                        <p><a href="https://www.linkedin.com/in/jeffrey-davakan-6924ab212/"> Visit my Linkedin</a> to view more about me( and see my face <i className='bi bi-emoji-smile'></i>)</p>
                        
                    </div>
                </div>
                <div className='page page--path' >
                    <div className='page__content'>
                        <h4 data-aos="fade-right" >Here is transcribed my professional background, training / education that I had, internships and competitions in which I participated and job that I had or currently occupies</h4>
                        <div className='path-section'>
                            <div className='path-block'>
                                <h3 >Education</h3>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title '  >High School Diploma ( College Mgr Steinmetz - Bohicon ) <br/><span className='path-block__element__date'>July 2019</span></h5>
                                    <p className='path-block__element__description ' >Nothing to say</p>
                                </div>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >Software engineering student ( Institut de Formation et de recherche en informatique - Abomey-Calavi )<br/><span className='path-block__element__date'>October 2019 - Now</span></h5>
                                    <p className='path-block__element__description ' >Estimate graduation in 2022</p>
                                </div>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >Javascript Algorithm And Data Structure Course ( FreeCodeCamp )</h5>
                                    <p className='path-block__element__description ' ><a target="_blank" download href="certificates/JavascriptAlgorithmAndDataStructure.png"><i className='bi bi-download'></i>Dowload certificate</a></p>
                                </div>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >Responsive Web Design ( FreeCodeCamp )</h5>
                                    <p className='path-block__element__description ' ><a target="_blank" download href="certificates/ResponsiveWebDesign.png"><i className='bi bi-download'></i>Dowload certificate</a></p>
                                </div>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >HTML Course ( Sololearn )</h5>
                                    <p className='path-block__element__description ' ><a target="_blank" download href="certificates/cert-1014-19085048.jpg"><i className='bi bi-download'></i>Dowload certificate</a></p>
                                </div>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >Python Core Course ( Sololearn )</h5>
                                    <p className='path-block__element__description ' ><a target="_blank" download href="certificates/cert-19085048-1073.jpg"><i className='bi bi-download'></i>Dowload certificate</a></p>
                                </div>
                            </div>
                            <div className='path-block'>
                                <h3>Internships , Jobs & Competitions</h3>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >Developer intern ( Marina Media - Cotonou ) <br/><span className='path-block__element__date'>June - July 2021</span></h5>
                                    <p className='path-block__element__description ' >During this intership , I learn to make a simple app using native php , jQuery and other javascript libraries. It was very interesting and I learn a lot</p>
                                </div>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >Trainee trainer ( Centre des Technologies nouvelles - Bohicon )<br/><span className='path-block__element__date'>July - August 2021</span></h5>
                                    <p className='path-block__element__description ' >This is the first time I had officialy take the hat of a trainer.<br/>During this intership, I improve my teaching skill , share my skills & knowledge with my fellow intern and make a lot of memories</p>
                                </div>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >ICPC Contestant <br/><span className='path-block__element__date'>2021</span></h5>
                                    <p className='path-block__element__description ' ><a target="_blank" download href="certificates/ACPC2021.pdf"><i className='bi bi-download'></i>Dowload certificate</a></p>
                                </div>
                                <div className='path-block__element'>
                                    <h5 className='path-block__element__title ' >Hackerlab Contestant ( Rank 4th )<br/><span className='path-block__element__date'>2021</span></h5>
                                    <p className='path-block__element__description ' ><a target="_blank" download href="certificates/Hackerlab.pdf"><i className='bi bi-download'></i>Dowload certificate</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='resume'>
                            <a target="_blank" download href="resume/jeffreyDvkFr.pdf"><i className='bi bi-download'></i>Dowload CV ( French )</a>
                            <a target="_blank" download href="resume/jeffreyDvkEng.pdf"><i className='bi bi-download'></i>Dowload CV ( English )</a>
                        </div>
                    </div>
                </div>
                <div className='page page--work' >
                    <div className='page--work__content'>
                        <h4 data-aos="fade-right" >With all my skills and knowledge, obtained since my insertion in the computer world, it is obvious that I have several achievements to my credit. Here are a few ...</h4>
                        <div className='projects'>
                            <div className='project' tip="New tab will be open on click">
                                <img src="preview/forstepStyle.png" alt="Forstep Style Sell"/>
                                <p>Forstep Style - Sell Page</p>
                                <a href="https://www.forstepstyle.com/sell" >View the project</a>
                            </div>
                            <div className='project' tip="New tab will be open on click">
                                <img src="preview/dadisiCo.png" alt="Dadisi.Co"/>
                                <p>Dadisi.Co - Front views</p>
                                <a href="https://site.dadisi.co" >View the project</a>
                            </div>
                            <div className='project' tip="New tab will be open on click">
                                <img src="preview/portailCulturel.png" alt="Portail Culturel Bénin"/>
                                <p>Portail Culturel Benin - Front Views</p>
                                <a href="http://portail-culturel.com" >View the project</a>
                            </div>
                            <div className='project' tip="New tab will be open on click">
                                <img src="preview/womenBeFree.png" alt="Women Be Free"/>
                                <p>Women Be Free - Front Views ( Class Project )</p>
                                <a href="http://learningway.tk/" >View the project</a>
                            </div>
                            <div className='project' tip="New tab will be open on click">
                                <img src="preview/ctnBenin.png" alt="CTN Benin"/>
                                <p>CTN Benin - Website</p>
                                <a href="http://bit.ly/Ctn-beni" >View the project</a>
                            </div>
                        </div>
                        <div className='more-project'>
                            <a href="https://github.com/JeffreyDvk">View more on my github</a>
                        </div>
                    </div>
                </div>
                <div className='page page--contact' >
                    <h3 data-aos="fade-right" className='page--contact__title'>Get In Touch</h3>
                    <p data-aos="fade-right" data-aos-delay="300" className='page--contact__description'>
                        Do you need my expertise?<br/>
                        Do you want to hire me for a job that meets my skills?<br/>
                        Or do you simply want to say a word to me, talk about a project or any other reason that may interest me? Do not hesitate to contact me</p>
                    <div data-aos="zoom-out" data-aos-delay="600" className='contact-form'>
                        <form className='form'>
                            <h4>Send a message</h4>
                            <div className='form__block'>
                                <div className='form__block__part--half'>
                                    <input type="text" name="name" placeholder='.yourName( )' required/>
                                </div>
                                <div className='form__block__part--half'>
                                    <input type="email" name="email" placeholder='.email( )' required/>
                                </div>
                            </div>
                            <div className='form__block'>
                                <div className='form__block__part'>
                                    <input type="text" name="objet" placeholder='.messageSubject( )' required/>
                                </div>
                            </div>
                            <div className='form__block'>
                                <div className='form__block__part'>
                                    <textarea name="message" placeholder='YOUR_MESSAGE = ...' required></textarea>
                                </div>
                            </div>
                            <div className='form__submit'>
                                <button>
                                    <span className='text'>App.SendMessage()</span>
                                    <span>Successfuly submited</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='social'>
                        <a data-aos="slide-up" data-aos-delay="100" href="https://wa.me/22960533466?text=Salut%Jeffrey" tip="229 60533466" className='social__media'><i className='bi bi-whatsapp'></i></a>
                        <a data-aos="slide-up" data-aos-delay="300" href="mailto:{jeffrey.dvk.fr@gmail.com}" tip="jeffrey.dvk.fr@gmail.com" className='social__media'><i className='bi bi-envelope'></i></a>
                        <a data-aos="slide-up" data-aos-delay="500" href="https://twitter.com/jeffreyDvk" tip="jeffreyDvk" className='social__media'><i className='bi bi-twitter'></i></a>
                        <a data-aos="slide-up" data-aos-delay="700" href="https://www.linkedin.com/in/jeffrey-davakan-6924ab212/" tip="jeffrey-davakan-6924ab212" className='social__media'><i className='bi bi-linkedin'></i></a>
                        <a data-aos="slide-up" data-aos-delay="900" href="https://github.com/JeffreyDvk " tip="JeffreyDvk" className='social__media'><i className='bi bi-github'></i></a>
                    </div>
                </div>
                <Move direction="down"/>
            </div>
            
        </main>
    </>
}

export default App
