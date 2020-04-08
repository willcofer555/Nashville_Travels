import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import PropertyList from '../PropertyList/PropertyList';
import { homesList } from '../../shared/properties';



class Locations extends Component {
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div id="deadheading" className="jumbotron jumbotron-fluid bg-transparent">
            <Nav />
            <PropertyList />
            </div>
        )
    }
}

export default Locations;