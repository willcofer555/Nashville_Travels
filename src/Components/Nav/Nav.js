import React, { Component } from 'react';



class Nav extends React.Component {

constructor(props) {
    super(props) 


}


render() {
    return(
        <div>
    <nav className="navbar navbar-expand-sm navbar-dark">
    <div className="container">
        <img className="navbar-brand" src="" alt="not found" width="80" height="80"/>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="nucampNavbar">
            <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse " id="nucampNavbar">
                
    <ul className="navbar-nav ml-auto">
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