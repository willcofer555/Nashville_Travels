import React, { Component } from 'react';
import './ListBookings.css';
import MyModalWithGrid from '../Modal/StrapModal';



export function BookingList({propsListing}) {
    return (
        <>
            
                                <div className="col media order-sm-last">
                                    <img className=" d-flex ml-3 img-fluid" src={require('../../img/modernHouse_retry.png')} alt="property#1" />
                                </div> 
                                <div className="col-12 col-md-8 ">
                                        <h5 className="card-title">{propsListing.address}<span className="card-body">{propsListing.bedBath}</span> </h5>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"> </span> <span className="ml-1">{propsListing.rating}</span>
                                        <p>{propsListing.description}</p>                                                             
                                        </div>
                            
                         </>
    )
}






