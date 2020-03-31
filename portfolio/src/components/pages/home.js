import React from 'react';
import img from "../../resources/img/300by300.png"
import {getSVG} from '../../resources/svg/svgRCHome'


const Home = () => {
    return (
        <main>
            <section className="home__section">
                <div className="home__section__container">

                    <div className="home__section__container-picture">                        
                        <img class="home__section__container-picture-image" 
                                src={img} alt="profile"/>                       
                    </div>

                    <div className="home__section__container-title">
                        <h3>Web Developer - ReactJS   NODEJS</h3>
                    </div>

                    <div className="home__section__container-goal">
                        <p> I am an enthusiastic web developer, learning and 
                            implementing the latest and cutting edge 
                            technologies in the world of web, for my clients and myself.
                        </p>
                    </div>

                    <div className="home__section__container-contact">
                        <ul>
                            <li>{getSVG({svg:'phone'})} +91 6305048661 </li>
                            <li>{getSVG({svg:'email'})} contact.admin@walluri.com</li>
                        </ul>
                        <ul>
                            <li> <a href="https://www.linkedin.com/in/walluri/" 
                                    target="_blank"  rel="noopener noreferrer">{getSVG({svg:'linkedin'})}</a></li>
                            <li> <a href="https://github.com/walluri" 
                                    target="_blank"  rel="noopener noreferrer">{getSVG({svg:'github'})}</a></li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Home;
