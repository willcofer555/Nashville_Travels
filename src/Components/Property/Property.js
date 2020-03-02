import React, { Component } from 'react';
import './Property.css';






class Property extends React.Component {
    

    render() {
        return(
            <>
            <div className="row row-content align-items-end mb-5">
                                <div className="col media order-sm-last">
                                    <img className=" d-flex ml-3 img-fluid" src={require('../../img/modernHouse.png')} alt="property#1" />
                                </div> 
                                <div className="col-12 col-md-8 ">
                                        <h5 className="card-title">address<span className="card-body">4 Bedroom 3 Bathroom</span> </h5>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"> </span> <span className="ml-1">43</span>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam illo, nihil quas repudiandae cupiditate veritatis facilis exercitationem officia error consequatur iste doloribus sed voluptatum odio commodi! At dignissimos quibusdam repellendus!</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium accusamus dolores debitis voluptatibus tempore amet suscipit, sed explicabo nulla quis vitae in consequuntur ipsum eius, commodi consectetur velit eaque delectus.</p>                                  
                                        <button className="btn btn-secondary">Reserve</button>                                   
                                                </div>
                            </div>
                             <div class="row row-content align-items-end">
                             <div class="col media">
                                 <img class="d-flex mb-5 img-fluid" src={require('../../img/modernHouse.png')} alt="property#1" />
                             </div>
                             <div class="col-12 col-md-8 ml-4">
                                 <h5 class="card-title ">311 Hemphouse Drive <span class="card-body">4 bedroom 2 bathroom</span></h5>
                                 <span class="fa fa-star checked"></span>
                                 <span class="fa fa-star checked"></span>
                                 <span class="fa fa-star checked"></span>
                                 <span class="fa fa-star"> </span> <span>43</span>
                                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam illo, nihil quas repudiandae cupiditate veritatis facilis exercitationem officia error consequatur iste doloribus sed voluptatum odio commodi! At dignissimos quibusdam repellendus!</p>
                                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium accusamus dolores debitis voluptatibus tempore amet suscipit, sed explicabo nulla quis vitae in consequuntur ipsum eius, commodi consectetur velit eaque delectus.</p>
                                     <div class="float-right mr-3">
                                         
                                        <div class="mb-1">
                                             
                                         </div>
                                         <button class="btn btn-secondary">Reserve</button>
                                     </div>
                                     
                                 </div>
                                                                     
                         </div>
                         </>
        )
    }



}

export default Property;