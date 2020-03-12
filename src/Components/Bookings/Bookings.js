import React, { Component } from 'react';
import { BookingList0,BookingList1,BookingList2, BookingList3, BookingList4, BookingList5} from '../ListBookings/ListBookings';
import './Bookings.css';







class Booking extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            bookings : []
        }
    }

    render() {
      
        let b0 = false;
        let b1 = false;
        let b2 = false;
        let b3 = false;
        let b4 = false;
        let b5 = false;
        
        let a0 = <BookingList0 />
        let a1 = <BookingList1 />
        let a2 = <BookingList2 />
        let a3 = <BookingList3 />
        let a4 = <BookingList4 />
        let a5 = <BookingList5 />
        

        let bArray = [b0,b1,b2,b3,b4,b5];
        let aArray = [a0,a1,a2,a3,a4,a5];
        
        

        this.props.books.map(book=> {
            return (aArray[book])
        });

                 return(
                    
                    this.props.books.map(book=> {
                    return (aArray[book])
        })
                    
                     
                )
    }



}

export default Booking;