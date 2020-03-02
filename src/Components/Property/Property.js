import React, { Component } from 'react';






class Property extends React.Component {
    

    render() {
        return(
            <div className="row row-content align-items-end mb-5">
                                <div className="col media order-sm-last">
                                    <img className=" d-flex ml-3 img-fluid" src={this.props.img.src} alt="property#1" />
                                </div>
                                <div className="col-12 col-md-8 ">
                                        <h5 className="card-title">{this.props.home.address}<span style="font-size:15px;"  className="card-body">{this.props.home.bedBath}</span> </h5>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"> </span> <span className="ml-1">{this.props.home.rating}</span>
                                        <p>{this.props.home.description}</p>
                                        <button className="btn btn-secondary">Reserve</button>                                   
                                                </div>
                            </div>
        )
    }



}

export default Property;