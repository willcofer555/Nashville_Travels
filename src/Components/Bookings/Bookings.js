import React, { Component } from 'react';
import { BookingList } from '../ListBookings/ListBookings';
import { Button } from 'react-bootstrap';
import { StrapModal } from '../Modal/StrapModal';
import Metrics from '../../utils/metrics';
import './Bookings.css';

class Booking extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookings : [],
            setModalShow: false,
            start_date: this.props.start,
            end_date:  this.props.end,
            bookedHome: ''      
        }
        this.hideModal = this.hideModal.bind(this);
        this.handleReserve = this.handleReserve.bind(this);
        }


    hideModal = () => {
        this.setState({setModalShow: false});    
    }


    handleReserve = () => {
        Metrics.bookHome(this.state.bookedHome, this.state.start_date, this.state.end_date,);

    }

    render() {
        let addModalClose = () => this.setState({setModalShow: false});
       let propsList = [
            {
                name:'0',
                address: '212 Hemphouse Lane',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                bedBath: '4 Bed 5 Bath',
                rating: '43',
                imgSrc: '/path/to/img'
            },
            {
                name:'1',
                address: '212 Hemphouse Lane',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                bedBath: '4 Bed 5 Bath',
                rating: '43',
                imgSrc: '../../img/modernHouse_retry.png'
            },
            {
                name:'0',
                address: '212 Hemphouse Lane',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                bedBath: '4 Bed 5 Bath',
                rating: '43',
                imgSrc: '../../img/modernHouse_retry.png'
            }
        ]
                 return(
                    
                    this.props.books.map(book=> {
                     let propsListing = propsList[book];
                    return(
                <div className="row row-content align-items-end mb-5">
                <BookingList onClick={()=> this.setState({setModalShow: true, bookedHome: propsListing.name})} propsListing={propsListing} />
                <button onClick={()=> this.setState({setModalShow: true, bookedHome: propsListing.name})} className="btn btn-secondary mr-5">Reserve</button>
                <StrapModal 
                show={this.state.setModalShow} 
                onHide={this.hideModal}
                reserve={this.handleReserve} 
                address={propsListing.address} 
                description={propsListing.description}
                />
                </div>
                
                        ) 
                    })
                    
                    
                     
                        )
    }



}

export default Booking;