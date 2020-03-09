import React, { Component } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Metrics from '../../utils';



class Lower extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
            bookings: null
        }
        this.handleListings = this.handleListings.bind(this);
    }



    handleListings = () => {
        if (this.startDate && this.endDate) {
            Metrics.getBookings(this.state.startDate, this.state.endDate).then(bookings => {
                this.setState({bookings: bookings});
            });
        }
    }



    componentDidMount() {
        GoldMedalMetrics.getGoldMedals(this.state.countryName).then(medals => {
          if(medals.length) {
            this.setState({medals: medals});
          }
        });
      }
    

    

    render() {
        return(
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
                                    
                                    <div className="myContainer col">
                                    <DateRangePicker className=""
            
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="start_date" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="end_date" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            
            />
            
                
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
                                                        <button className="btn btn-block btn-info" type="submit">Search</button>
                                                    </div>
                                                </div>
                                        </form>
                                                    
                                            


                            </div>
                        
                           </div> 
                        </div>
            </div>
        )
    }


}

export default Lower;