import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Top  from '../Top/Top';
import About from '../About/About';
import Create from '../Create/Create';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import NavBar from '../Navbar/Navbar';

const RouteManager:React.FC = () => {
    return (
        <Router>
            <div>
                <NavBar /><hr/>
                <Route exact path='/' component={Top}/>
                <Route  path='/About' component={About}/>
                <Route  path='/Create' component={Create}/>
                <Route  path='/Blog' component={Blog}/>
                <Route  path='/Contact' component={Contact}/>
            </div>
        </Router>
    )
}

export default RouteManager;
