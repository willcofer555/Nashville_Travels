import React from 'react';
import './homes.css';



export function BookingList({propsListing,props}) {
       
    return (
        <>
            
                                <div className="col media order-sm-last">
                                    <img className=" d-flex ml-3 img-fluid" src={propsListing.imgSrc} alt="property#1" />
                                    
                                </div> 
                                <div className="col-12 col-md-6 ">                                                                   
                                        <h5 className="card-title">{propsListing.address}<span className="card-body">{propsListing.bedBath}</span> </h5>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"> </span> <span className="ml-1 figure-caption">{propsListing.rating}</span>
                                        <p className="mt-3">{propsListing.description}</p>                                                             
                                        </div>
                         </>
    )
}






