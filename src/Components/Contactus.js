import React, { Component } from 'react';
import Nav from './Nav';
import { Row, Button, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };
    }


    handleSubmit(values) {
        console.log('current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
        
    }


    render(){
        return(
        <div className="container-fluid">
        <Nav />
        <div id="deadheading" className="jumbotron jumbotron-fluid bg-transparent mx-5">
            
            <h3>Contact Us</h3>
            <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1230 Highland Hills<br />
                            Nashville, TN 37064<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:Brehewitt@gmail.co"><i className="fa fa-envelope-o"></i> Brehewitt@gmail.com</a>
                    </div>
            </div>
            <div className="row row-content">
                   <div className="col-12">
                      <h2>Send us your Feedback</h2>
                      <hr />
                   </div>
                    <div className="col-md-10">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group" row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text 
                                        model=".firstName"
                                        className="form-control"
                                        id="firstName" name="firstName"
                                        placeholder="First Name"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}                   
                                        />
                                </Col>  
                            </Row >
                            <Row className="form-group" row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text id="lastName" name="lastName"
                                        model=".lastName"
                                        className="form-control"
                                        placeholder="Last Name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />

                                        

                                </Col>          
                            </Row >
                            <Row className="form-group" row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                         />
                                         <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 characters',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                        

                                </Col>
                            </Row >
                            <Row className="form-group" row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text  id="email" name="email"
                                        model=".email"
                                        className="form-control"
                                        placeholder="Email"
                                        validators={{
                                            required,
                                            validEmail
                                        }}                                       
                                         />
                                         <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                         
                                         
                                </Col>
                            </Row >
                            <Row className="form-group" row>
                                <Col md={{size: 4, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox 
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div >
                                </Col>
                                <Col md={4}>
                                    <Control.select model=".contactType" name="contactType"
                                           className="form-control"
                                           >
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Control.select>
                                </Col>
                            </Row >
                            <Row className="form-group" row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".feedback" id="feedback" name="feedback"
                                        className=".feedback"
                                        rows="12"
                                        />
                                </Col>
                            </Row >
                            <Row className="form-group" row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
        </div>
        </div>
        )
    }
}

export default Header;