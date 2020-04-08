import React, { Component } from 'react';
import Nav from '../Nav/Nav';



class Header extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div id="deadheading" className="jumbotron jumbotron-fluid bg-transparent">
            <Nav />
            <h2>Contact Us</h2>
            </div>
        )
    }
}

export default Header;