import React from 'react';
import img from "../../resources/img/300by300.png"
import {getSVG} from '../../resources/svg/svgRCHome'

const goal = "I am an enthusiastic web developer, who likes to develop apps using the latest and cutting edge technologies."
const goal2 = " I can develop Serverless, High performace, Scalable and Responsive apps using the MERN stack, with an amazing UI."
const  linkedinURL = "https://www.linkedin.com/in/walluri/";
const githubURL = "https://github.com/walluri";


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
                            <li> <a href={linkedinURL} target="_blank"  
                            rel="noopener noreferrer">{getSVG({svg:'linkedin'})}</a></li>
                            <li> <a href={githubURL} target="_blank"
                            rel="noopener noreferrer">{getSVG({svg:'github'})}</a></li>
                        </ul>
                    </div>                    

                    <div className="home__section__container-goal">
                        <p> {goal}<br/><br/> {goal2}</p>
                    </div>

                    <div className="home__section__container-contact">
                        <ul>
                            <li>Contact</li>
                            <li>{getSVG({svg:'phone'})}  +91 6305048661 </li>
                            <li>{getSVG({svg:'email'})}  contact.admin@walluri.com</li>
                        </ul>
                    </div>

                </div>
            </section>
            <footer/>
        </main>
    )
}

export default Home;
