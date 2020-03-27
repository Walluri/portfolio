import React from 'react';

const Home = () => {
    return (
        <main>
            <section className="home__section">
                <div className="home__section-Aboutme">
                    <h3 className="home__section-heading">welcome to my profile on the internet<br/></h3>
                    <br/>This site is under maintenance and is being developed using CSS3 [flex/grid/sass] - reactJS - Google Cloud Platform - and many other latest technologies.
                    <br/>I am actively looking for opportunities in ReactJS - NodeJS - GraphQL.
                    <br/>You can visit my LinkedIn profile <a target="_blank" href="www.linkedin.com/in/walluri">here</a>
                    <br/> You can also see the work and my live projects <a target="_blank" href="https://github.com/walluri">here</a>
                    {/* <div className="home__section-profilepic">Image</div>
                    <div className="home__section-description">Description</div> */}
                </div>
            </section>
        </main>
    )
}

export default Home;