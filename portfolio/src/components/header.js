import React, {useState} from 'react';

import Home from './home';
import Skills from './skills';
import Experience from './experience';

import {BrowserRouter, Switch, Route,Link} from 'react-router-dom';

const Header = () => {

    const [togglemenu,setToggleMenu] = useState('off');

    const burger_clickHandler = ()=>{
        if(togglemenu==='on'){
            setToggleMenu('off');            
        }
        else if (togglemenu==='off'){
            setToggleMenu('on');
        }
        console.log('current state is : '+ togglemenu); 
    } 

    return (
        <div>
            <BrowserRouter>
                <nav className='navbar'>                
                    <div className={"navbar__burger"} onClick={burger_clickHandler}>
                        <div className={togglemenu ==='off' ? "navbar__burger-line" : "navbar__burger-line animiate-line1"} ></div>
                        <div className={togglemenu ==='off' ? "navbar__burger-line" : ".animiate-line2"} ></div>
                        <div className={togglemenu ==='off' ? "navbar__burger-line" : "navbar__burger-line animiate-line3"} ></div>
                    </div>
                    
                    <ul className={togglemenu==='on' ? "navbar__list animate-list" :"navbar__list"} >
                        <li className={togglemenu ==='off' ? "navbar__listitems" : "navbar__listitems animate-listitem" }>
                            <Link className='navbar__links' to={'/'} onClick={burger_clickHandler}>Home</Link>
                        </li>
                        <li className={togglemenu ==='off' ? "navbar__listitems" : "navbar__listitems animate-listitem" }>
                            <Link className='navbar__links' to={'/Skills'} onClick={burger_clickHandler}>Skills</Link>
                        </li>
                        <li className={togglemenu ==='off' ? "navbar__listitems" : "navbar__listitems animate-listitem" }>
                            <Link className='navbar__links' to={'/Experience'} onClick={burger_clickHandler}>Projects</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Skills' component={Skills} />
                    <Route exact path='/Experience' component={Experience} />
                </Switch>
            </BrowserRouter> 
        </div>
    )
}

export default Header;