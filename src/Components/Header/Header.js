import React, { Component } from 'react';
import Nav from '../Nav/Nav';



class Header extends React.Component {


    render() {
        return(
            <div id="heading" className="jumbotron jumbotron-fluid bg-light">
                <Nav>
                </Nav>
            </div>
        
        )
    }
}
export default Header;