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
    let propsList = [
        {
            name:'0',
            address: '212 Hemphouse Lane',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            bedBath: '4 Bed 5 Bath',
            rating: '43',
            imgSrc: '/path/to/img',
            cleaningFee: '56.50',
            perNight: '475.00'            
            
        },
        {
            name:'1',
            address: '212 Hemphouse Lane',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            bedBath: '4 Bed 5 Bath',
            rating: '43',
            imgSrc: '../../img/modernHouse_retry.png',
            cleaningFee: '51.50',
            perNight: '475.00',
            
        },
        {
            name:'2',
            address: '212 Hemphouse Lane',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            bedBath: '4 Bed 5 Bath',
            rating: '43',
            imgSrc: '../../img/modernHouse_retry.png',
            cleaningFee: '53.00',
            perNight: '475.00',
        }
    ];
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