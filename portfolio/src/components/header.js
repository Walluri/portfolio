import React from 'react';

import Home from './home';
import Skills from './skills';
import Experience from './experience';
//import {} from 'react-router';
import {BrowserRouter, Switch, Route,Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <BrowserRouter>
                <nav class='navbar'>                
                    <ul class='navbar__list'>
                        <li class='navbar__listitems'><Link class='navbar__links' to={'/'}>Home</Link></li>
                        <li class='navbar__listitems'><Link class='navbar__links' to={'/Skills'}>Skills</Link></li>
                        <li class='navbar__listitems'><Link class='navbar__links' to={'/Experience'}>Projects</Link></li>
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