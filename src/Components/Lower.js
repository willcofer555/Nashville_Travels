import React from "react";
import "./homes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import PropertyList from "./PropertyList";

export function Lower(props, date) {
  return (
    <>
      <div id="heading" className="jumbotron jumbotron-fluid bg-light">
        <Nav color="text-light" />
        <div className="container">
          <div className="row">
            <div
              id="innerJumboContainer"
              className="col col-sm-12 col-md-12 mb-auto pt-xl-5"
            >
              <div className="jumbotron bg-transparent innerJumbo ">
                <div className="col-xs-12 pl-0 ml-0 col-lg-12">
                  <div className="col-xs-9 col-lg-12">
                    <h1 className="hc display-5">
                      Nightly. Weekly. Month to Month
                    </h1>
                  </div>
                  <div className="col-xs-9 col-lg-12">
                    <h4 className="hc display-5">
                      More than a place to hang your hat.
                    </h4>
                  </div>
                </div>
                <hr />
                <form onSubmit={props.handleListings} action="submit">
                  <div className="row mb-2">
                    <div className="col col-sm-12">{props.children}</div>
                  </div>
                  <div className="row form-group">
                    <div className="col col-sm-12">
                      
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button
                        className="btn btn-block btn-primary"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lower;
