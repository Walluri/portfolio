import React from 'react';

import Home from './home';
import Skills from './skills';
import Experience from './experience';

import {BrowserRouter, Switch, Route,Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <BrowserRouter>
                <nav className='navbar'>                
                    <div className="navbar__burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className='navbar__list'>
                        <li className='navbar__listitems'><Link className='navbar__links' to={'/'}>Home</Link></li>
                        <li className='navbar__listitems'><Link className='navbar__links' to={'/Skills'}>Skills</Link></li>
                        <li className='navbar__listitems'><Link className='navbar__links' to={'/Experience'}>Projects</Link></li>
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