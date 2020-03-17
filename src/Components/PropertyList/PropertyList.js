import React, { Component } from 'react';
import Property from '../Property/Property';
import StrapModal from '../Modal/StrapModal'
import './PropertyList.css';


class PropertyList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            setModalShow: false
        }
    }

    home1 = {
        img: '',
        address: '',
        bedBath: '',
        description: '',
        rating: '',
        
    } 

    hideModal = () => {
        this.setState({setModalShow: false});    
    }
    
render() {
    return(
            <div className="container">
            <Property onClick={()=> this.setState({setModalShow: true})}/>   
            <StrapModal
                show={this.state.setModalShow} 
                onHide={this.hideModal}
                reserve={this.handleReserve} 
                />
            </div>
    )
}
}
export default PropertyList;