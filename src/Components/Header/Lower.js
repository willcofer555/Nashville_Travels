import React, { Component } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import DateTimeRangePicker from 'react-bootstrap-datetimerangepicker';
import Metrics from '../../utils/metrics';
import Nav from '../Nav/Nav';
import PropertyList from '../PropertyList/PropertyList';
import Booking from '../Bookings/Bookings';
import moment from 'moment';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Lower extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            foundBookings: false,
            submission: false,
            startDate: moment().subtract(3, 'days'),
            endDate: moment(),
            ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      },
        }
        this.handleListings = this.handleListings.bind(this);
        this.handleApply = this.handleApply.bind(this);
    }

                
    handleListings = () => {
        this.setState({foundBookings: true, bookings : [1,2]}); 
        if (this.startDate && this.endDate) {
            Metrics.getBookings(this.state.startDate, this.state.endDate).then(bookings => {
                let bookingsState = this.state.bookings;
                let bookingName = bookings.homeId;
                bookingsState.push(bookingName);
            })
        }
    }

    handleApply(event, picker) {
        this.setState({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });
      }

    render() {
        let start = this.state.startDate.format('YYYY-MM-DD');
        let end = this.state.endDate.format('YYYY-MM-DD');
        let label = start + ' - ' + end;
        if (start === end) {
        label = start;
        }
            if ( !this.state.foundBookings) {
                return(
                    <>
                    <div id="heading" className="jumbotron jumbotron-fluid bg-light">
                    <Nav />
                    <div className="container">
                 <div className="row">
                    <div id="innerJumboContainer" className="col col-sm-12 col-md-12 mx-auto mb-auto">
                        <div className="jumbotron bg-transparent innerJumbo ">
                           <div className="col">
                               <div className="col"> 
                            <h2>Welcome <span>to Nashville Travels</span></h2>
                            <h6>Book with us and experience the difference</h6>
                        </div>
                    </div>
                            <hr />
                            <form onSubmit={this.handleListings} action="submit">
                            <div className="row mb-2">        
                                    <div className="col col-sm-12">
                                    <DateTimeRangePicker
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onApply={this.handleApply}
>                       <div className="input-group">
                        <input type="text" className="form-control" placeholder={this.state.startDate}  value={label} />
                        <span className="input-group-btn">
                        <Button className="default date-range-toggle">
                        <i className="fa fa-calendar"/>
                        </Button>
                        </span>
                        </div>
                    </DateTimeRangePicker>
                                    </div> 
                                    </div>
                                    <div className="row form-group">
                                    
                                            <div className="col col-sm-12">
                                                    <select className="form-control" name="" id="">
                                                        <option value="1">1 Guest</option>
                                                        <option value="2">2 Guests</option>
                                                        <option value="3">3 Guests</option>
                                                        <option value="4">4 Guests</option>
                                                        <option value="5">5 Guests</option>
                                                    </select>
                                                    
                                                </div>                
                                            </div>
                                            <div className="row">
                                                    <div className="col">
                                                        <button className="btn btn-block btn-primary" type="submit">Search</button>
                                                    </div>
                                                </div>
                                        </form>
                            </div>
                        
                           </div> 
                        </div>
            </div>
            </div>
            <PropertyList />
            </>    
        )
    } else if (this.state.foundBookings) {
        
        return (
            <>
            <Nav />
            <div className="container">
            <Booking start={this.state.startDate} end={this.state.endDate} books={this.state.bookings}/>
            </div>
            </>
        )
    }
 
}
}

            

export default withRouter(Lower);