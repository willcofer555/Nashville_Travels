import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Nav.css'



class Nav extends React.Component {



render() {
    return(
        <div>
    <nav className="navbar navbar-expand-sm navbar-dark">
    <div className="container">
        <img className="navbar-brand" src="" alt="" width="80" height="80"/>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="nucampNavbar">
            <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse " id="nucampNavbar">
                
    <ul className="navbar-nav ml-auto">
    
    {/*<NavItem>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
    </NavItem> */}
            <li className="nav-item active"> <a className="nav-link text-dark" href="#"> <i className=""></i> Home</a></li>
            <li className="nav-item"> <a className="nav-link text-dark" href="#"> <i className=""></i>Locations</a></li>
            <li className="nav-item"> <a className="nav-link text-dark" href="#"> <i className=""></i>Contact</a></li>
            <li className=""> <a data-toggle="modal" data-target="#loginModal" className="nav-link text-dark"  href="#"> <i className="" ></i>Login</a></li>

        </ul>
        
    </div>
    </div>
    </nav>
    </div>
    
    )
}

}

export default Nav;