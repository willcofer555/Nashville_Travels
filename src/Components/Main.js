import React from 'react';
import Nav from './Nav';
import Lower from './Lower';
import { Button } from 'react-bootstrap';
import Contactus from './Contactus';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DateTimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment';
import Metrics from '../utils/metrics';
import Booking from './Bookings';
import Locations from './Locations';
import { Login } from './Login';
import './homes.css';
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            foundBookings: false,
            submission: false,
            startDate: moment().subtract(3, 'days'),
            endDate: moment(),
            ranges: {'Today': [moment(), moment()],'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],'Last 7 Days': [moment().subtract(6, 'days'), moment()],'Last 30 Days': [moment().subtract(29, 'days'), moment()],'This Month': [moment().startOf('month'), moment().endOf('month')],'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],  
        }
    }
    this.handleListings = this.handleListings.bind(this);
    this.handleApply = this.handleApply.bind(this);
}

handleApply(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  }
  
 componentDidUpdate() {
     console.log(this.state.startDate.format('YYYYMMDD'));
     console.log(this.state.endDate.format('YYYYMMDD'));
 }

 
handleListings = () => {
     this.setState({foundBookings: true});
    if (this.state.startDate && this.state.endDate) {
        let formatStart = this.state.startDate.format('YYYYMMDD');
        let formatEnd = this.state.endDate.format('YYYYMMDD');
        Metrics.getBookings(formatStart, formatEnd).then(bookings => {
            this.setState({bookings: bookings})
            console.log(bookings)
            //.then props.push history(search) to avoid this redirect nonsense (might use redux by then)
    })
}}
    render() {
    
    const handleBookings = () => {
        return(
            <div className="container">
            <div id="deadheading" className="jumbotron jumbotron-fluid bg-transparent">
                <Nav  />
                <Booking startDate={this.state.startDate} endDate={this.state.endDate} books={this.state.bookings}/>
            </div>
            </div>
        )}

    const runLower = () => {
        if (!this.state.foundBookings) {
            let start = this.state.startDate.format('MM/DD/YYYY');
        let end = this.state.endDate.format('MM/DD/YYYY');
        let label = start + ' - ' + end;
        if (start === end) {label = start;}
            return(
                <Lower handleListings={this.handleListings}>
                <DateTimeRangePicker startDate={this.state.startDate} endDate={this.state.endDate} onApply={this.handleApply} value={label}
    >               <div className="input-group">
                    <input type="text" className="form-control" placeholder={this.state.startDate} value={label}  />
                    <span className="input-group-btn">
                    <Button className="default date-range-toggle">
                    <i className="fa fa-calendar"/>
                    </Button>
                    </span>
                    </div>
                </DateTimeRangePicker>
                </Lower>  
            )} else {return (<Redirect to='/search'/>)}};
            
            return(
            <Switch>     
            <Route path='/home' component={runLower}> </Route>
            <Route exact path='/locations' render={()=> <Locations />}> </Route>
            <Route exact path='/search' component={handleBookings}></Route>
            <Route exact path='/contact' render={()=> <Contactus />}></Route>
            <Route exact path='/login' render={()=> <Login />}></Route>
            <Redirect to='/home' />
            </Switch>  
        )
    }
}
 export default withRouter(Main);