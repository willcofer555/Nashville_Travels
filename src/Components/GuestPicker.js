import React from 'react';





export function GuestPicker(props) {


//Guest Picker for Dashboard


    return(
        <div className="row form-group">
                 <div className="col col-sm-12">
             <select className="form-control" value={props.value} onChange={props.onChange} name="" id="">
                <option value="1">1 Guest</option>
                 <option value="2">2 Guests</option>
                 <option value="3">3 Guests</option>
                 <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                </select>                                       
                 </div>                
                 </div>


    )
}


