import React, { Component } from 'react';
import Nav from './Nav';
import PropertyList from './PropertyList';
import { homesList } from '../shared/properties';



function Locations(){
   
        return(
            <div id="deadheading" className="jumbotron jumbotron-fluid bg-transparent">
            <Nav />
            <PropertyList />
            </div>
        )
}

export default Locations;