import React from 'react';
import './homes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import PropertyList from './PropertyList';



export function Lower(props){

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
                            <form onSubmit={props.handleListings} action="submit">
                            <div className="row mb-2">        
                                    <div className="col col-sm-12">
                                    {props.children}
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

}

export default Lower;