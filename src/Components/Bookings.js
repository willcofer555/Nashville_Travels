import React from 'react';
import { BookingList } from './ListBookings';
import { StrapModal } from './StrapModal';
import Metrics from '../utils/metrics';
import { homesList } from '../shared/properties';
import { Modal, Col, Form } from 'react-bootstrap';
import './homes.css';
import moment from 'moment';

class Booking extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookings : [],
            setModalShow: false,
            start_date: this.props.start,
            end_date:  this.props.end,
            nights: '',
            bookedHome: '',
            post: {
                email: '',
                password: '',
                address: ''
            }    
        }
        this.hideModal = this.hideModal.bind(this);
        this.handleReserve = this.handleReserve.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

    hideModal = () => {
        this.setState({setModalShow: false});    
    }

    handleReserve = () => {
        if (this.state.post && this.state.start_date && this.state.end_date && this.state.bookedHome)
        Metrics.bookHome(this.state.bookedHome, this.state.start_date, this.state.end_date,)
        .then(Metrics.bookUser( this.state.bookedHome,this.state.start_date,this.state.end_date, this.state.post.email))
    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({post: {...this.state.post, [e.target.name]: value}});
    }

    handleSubmit = e => {
        this.setState({post: {email: ""}});
        e.preventDefault();
    }

    

    componentDidMount() {
        let start = this.props.startDate.format('YYYY-MM-DD');
        let end = this.props.endDate.format('YYYY-MM-DD');
        const dateB = moment(start);
        const dateC = moment(end);
        console.log(dateB, dateC);
        console.log(dateC.diff(dateB, 'days'));
        const numNights = dateC.diff(dateB, 'days');
        this.setState({nights: numNights});
        console.log(this.state.numNights);
        
    }

    render() {
        let start = this.props.startDate.format('MM/DD/YYYY');
        let end = this.props.endDate.format('MM/DD/YYYY');
        let addModalClose = () => this.setState({setModalShow: false});
        let propsList = homesList;
        
                 return(
                     
                    this.props.books.map(book=> {
                    let propsListing = propsList[book];
                    return(
                
                <div className="row row-content align-items-end mb-5">
                <BookingList onClick={()=> this.setState({setModalShow: true, bookedHome: propsListing.name})} propsListing={propsListing} />
                <button onClick={()=> this.setState({setModalShow: true, bookedHome: propsListing.name})} className="btn btn-secondary mr-5">Reserve</button>
                <StrapModal
                start={start}
                end={end}
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange}
                show={this.state.setModalShow} 
                onHide={this.hideModal}
                reserve={this.handleReserve} 
                homeAddress={propsListing.address}
                perNight={propsListing.perNight} 
                cleaningFee={propsListing.cleaningFee}
                description={propsListing.description}
                numNights={this.state.nights}
                >
                </StrapModal>
                </div>
                
                        ) 
                    })
                        )
    }
}

export default Booking;