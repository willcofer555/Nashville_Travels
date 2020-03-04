import React, { Component } from 'react';
import Property from '../Property/Property';
import './PropertyList.css';


class PropertyList extends React.Component {
  
    home1 = {
        img: '',
        address: '',
        bedBath: '',
        description: '',
        rating: ''
    } 

    
    



render() {
    return(
        <div className="container">
                 <Property />           
        </div>
    )
}

}
export default PropertyList;