import React, { Component } from 'react';
import Property from './Property';
import StrapModal from './StrapModal'
import { homesList } from '../shared/properties';
import './homes.css';


class PropertyList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            setModalShow: false
        }
    }

    hideModal = () => {
        this.setState({setModalShow: false});    
    }

render() {
    let propsList = homesList;
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