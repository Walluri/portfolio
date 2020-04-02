import React from 'react';
import img from "../../resources/img/300by300.png"
import {getSVG} from '../../resources/svg/svgRCHome'


const Home = () => {
    return (
        <main>
            <section className="home__section">
                <div className="home__section__container">

                    <div className="home__section__container-picture">
                        <img className="home__section__container-picture-image" 
                                src={img} alt="profile"/>                       
                    </div>


                    <div className="home__section__container-title">
                        <h3>WEB DEVELOPER - ReactJS   NODEJS</h3>
                    </div>

                    <div className="home__section__container-worklinks">
                        <ul>
                            <li> <a href="https://www.linkedin.com/in/walluri/" 
                                    target="_blank"  rel="noopener noreferrer">{getSVG({svg:'linkedin'})}</a></li>
                            <li> <a href="https://github.com/walluri" 
                                    target="_blank"  rel="noopener noreferrer">{getSVG({svg:'github'})}</a></li>
                        </ul>
                    </div>                    

                    <div className="home__section__container-goal">
                        <p> I am an enthusiastic web developer, who likes to develop apps 
                            using the latest and cutting edge technologies.<br/><br/>
                            I can develop Serverless, High performace, Scalable and Responsive apps 
                            using the MERN stack, with an amazing UI.
                        </p>
                    </div>

                    <div className="home__section__container-contact">
                        <ul>
                            <li>Contact</li>
                            <li>{getSVG({svg:'phone'})}  +91 6305048661 </li>
                            <li>{getSVG({svg:'email'})}  contact.admin@walluri.com</li>
                            <li>Copyright &copy; 2020 India,Inc. All rights reserved. </li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Home;
