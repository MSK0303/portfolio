import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home  from '../Home/Home';
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
                <Route  exact path='/portfolio/' component={Home} />
                <Route  path='/portfolio/About' component={About}/>
                <Route  path='/portfolio/Create' component={Create}/>
                <Route  path='/portfolio/Blog' component={Blog}/>
                <Route  path='/portfolio/Contact' component={Contact}/>
            </div>
        </Router>
    )
}

export default RouteManager;
