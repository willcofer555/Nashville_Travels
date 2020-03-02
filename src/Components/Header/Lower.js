import React,Component } from 'react';


class Lower extends React.Component {


    render() {
        return(
            <div className="container">
                 <div className="row">
                    <div id="innerJumboContainer" className="col col-sm-12 col-md-12 mx-auto mb-auto">
                        <div className="jumbotron bg-transparent innerJumbo ">
                           <div className="col">
                               <div className="col"> 
                            <h2>Welcome <span>to Nashville Travels</span>
                            </h2> <h6 >  Book with us and experience the difference  </h6>
                        </div>
                    </div>
                            <hr>
                            <form action="">
                            <div className="row form-group">
                                    
                                    <div className="col col-sm-6 ">
                                        <input className="form-control" type="Date" name="date1" id="Date" placeholder="1/1/2020">
                                        
                                    </div>
                                    <span></span>
                                    <div className="col col-sm-6 ">
                                            <input className="form-control" type="Date" name="date2" id="Date" placeholder="1/1/2020">
                                            
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