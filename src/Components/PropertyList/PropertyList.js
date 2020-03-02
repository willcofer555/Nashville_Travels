import React, { Component } from 'react';
import Property from '../Property/Property';


class PropertyList extends React.Component {
   home1 = {
       img: '',
       address: '',
       bedBath: '',
       description: '',
       rating: ''
   } 
homes = [home1,home1,home1,home1];




render() {
    return(
        <div  className="row align-items-start">    
                                    <div className= "mx-auto">
                                        <h5>Featured Properties</h5>   
                                        <hr />                                    
                                    </div>                                    
                                </div>


    )
}

}