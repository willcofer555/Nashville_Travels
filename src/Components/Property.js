import React from 'react';
import './homes.css';






class Property extends React.Component {
    

    render() {
        return(
            <>
            <div className="row row-content align-items-end mb-5">
                                <div className="col media order-sm-last">
                                    <img className=" d-flex ml-3 img-fluid" src={require('../img/modernHouse.png')} alt="property#1" />
                                </div> 
                                <div className="col-12 col-md-8 ">
                                        <h5 className="card-title">315 Broad Street<span className="card-body">4 Bedroom 3 Bathroom</span> </h5>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"> </span> <span className="ml-1">43</span>
                                        <p>Luxurious Townhouse Brand New! 3 Full Bathrooms. Walk to Brewery, Cross Fit, Coffee, Bar, Record Store. Relax in style, eat and shop local, with just a 10 min Uber ride to main tourist locations. So many neighborhood restaurants, cafes and shops to try while 9min to Broadway & 8min to Titan's Stadium. 3bdr, 3full bath, 2 car garage. Trendy East Nashville is a vibrant but more relaxed neighbor to Broadway/The Gulch. Note: vans/pickups won't fit in garage.</p>
                                        <button onClick={this.props.onClick} className="btn btn-secondary">Reserve</button>                                   
                                                </div>
                            </div>
                             <div className="row row-content align-items-end">
                             <div className="col media">
                                 <img className="d-flex mb-5 img-fluid" src={require('../img/old_house.png')} alt="property#1" />
                             </div>
                             <div className="col-12 col-md-8 ">
                                 <h5 className="card-title ">311 Hemphouse Drive <span className="card-body">4 bedroom 2 bathroom</span></h5>
                                 <span className="fa fa-star checked"></span>
                                 <span className="fa fa-star checked"></span>
                                 <span className="fa fa-star checked"></span>
                                 <span className="fa fa-star"> </span> <span>43</span>
                                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam illo, nihil quas repudiandae cupiditate veritatis facilis exercitationem officia error consequatur iste doloribus sed voluptatum odio commodi! At dignissimos quibusdam repellendus!</p>
                                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium accusamus dolores debitis voluptatibus tempore amet suscipit, sed explicabo nulla quis vitae in consequuntur ipsum eius, commodi consectetur velit eaque delectus.</p>
                                     <div className="float-right mr-3">
                                         
                                        <div className="mb-1">
                                             
                                         </div>
                                         <button className="btn btn-secondary">Reserve</button>
                                     </div>
                                     
                                 </div>
                                                                     
                         </div>
                         </>
        )
    }



}

export default Property;