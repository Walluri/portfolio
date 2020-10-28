import React, {useState,useEffect} from 'react';

import Home from '../pages/home';
import Skills from '../pages/skills/skills';
import Experience from '../pages/experience/experience';
import Footer from './footer';


import {BrowserRouter, Switch, Route,Link} from 'react-router-dom';

const Header = () => {

    const [menu,setmenu] = useState(false);

    const clicked = ()=>  setmenu(!menu); 
    
    const sendRequest = ()=>{
        fetch('https://703ridac1g.execute-api.ap-south-1.amazonaws.com/TestStage', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
          })
          .then((response) => response.json())
          .then((res) => {   console.log('Success:', res);   })
          .catch((error) => {   console.error('Error:', error); });
    }
    useEffect(sendRequest,[]);                   

    return (
        <div>
            <BrowserRouter>
                <nav className='navbar'>                
                    <div className={"navbar__burger"} onClick={clicked}>
                        <div className={!menu ? "navbar__burger-line" : "navbar__burger-line animiate-line1"} ></div>
                        <div className={!menu ? "navbar__burger-line" : ".animiate-line2"} ></div>
                        <div className={!menu ? "navbar__burger-line" : "navbar__burger-line animiate-line3"} ></div>
                    </div>
                    
                    <ul className={menu ? "navbar__list animate-list" :"navbar__list"} >
                        <li className={!menu ? "navbar__listitems" : "navbar__listitems animate-listitem" }>
                            <Link className='navbar__links' to={'/'} onClick={clicked}>Home</Link>
                        </li>
                        <li className={!menu ? "navbar__listitems" : "navbar__listitems animate-listitem" }>
                            <Link className='navbar__links' to={'/Skills'} onClick={clicked}>Skills</Link>
                        </li>
                        <li className={!menu ? "navbar__listitems" : "navbar__listitems animate-listitem" }>
                            <Link className='navbar__links' to={'/Experience'} onClick={clicked}>Projects</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Skills' component={Skills} />
                    <Route exact path='/Experience' component={Experience} />
                </Switch>
                <Footer/>
            </BrowserRouter> 

        </div>
    )
}

export default Header;