import React from "react";
import "./homes.css";

export function Property(props) {
  props.homes.forEach(home => {
    return (
      <>
        <div className="row row-content align-items-end mb-5">
          <div className="col media order-sm-last">
            <img
              className=" d-flex ml-3 img-fluid"
              src={require("../img/modernHouse.png")}
              alt="property#1"
            />
          </div>
          <div className="col-12 col-md-8 ">
            <h5 className="card-title">
              {props.address}
              <span className="card-body">{props.bedBath} </span>{" "}
            </h5>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"> </span>{" "}
            <span className="ml-1">{props.rating}</span>
            <p>{props.description}</p>{" "}
            <button onClick={props.onClick} className="btn btn-secondary">
              Reserve
            </button>
          </div>
        </div>
      </>
    );
  });
}

export default Property;
