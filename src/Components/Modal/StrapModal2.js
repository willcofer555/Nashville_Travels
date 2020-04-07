import React, { Component } from 'react' ;
import { Modal, Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap';



class StrapModal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            
                <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                  <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    {this.props.homeAddress} <br/> 
                    </Modal.Title>
                    <div className="mt-2 ml-3 text-secondary">
                    {this.props.start} - {this.props.end}
                    </div>
                   
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                      <Row className="show-grid">
                        <Col xs={12} md={12}>
                        </Col>
                        <Col xs={12} md={12}>
                          
                        </Col>
                      </Row>
                      <Row className="show-grid">
                      <Form>
      <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={this.state.post.email} onChange={this.props.handleChange} name="email" type="email" placeholder="Enter email" /> 
                  </Form.Group>
        
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={this.props.post.password} onChange={this.props.handleChange} type="password" name="password" placeholder="Password" />
                  </Form.Group>
      </Form.Row>
    
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control value={this.state.post.address} onChange={this.handleChange} type="address" name="address" placeholder="1234 Main St" />
      </Form.Group>
    
      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
    
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" value='option'> 
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachusetts</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
          </Form.Control>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Col xs={12} md={12} className="mb-3">
        ${this.props.perNight} x {this.props.numNights} Nights
      </Col>
      <Col xs={12} md={12} className="mb-3">
         +  ${this.props.cleaningFee} Cleaning Fee
      </Col>
      <Col xs={12} md={12} className="mb-3">
        +  tax
      </Col>
      </Form.Row>
      <hr></hr>
      
      <Button className="btn-primary mr-3" type="submit" oncClick={this.props.reserve}> Reserve</Button>
        <Button className="btn-secondary mr-3" onClick={this.props.onHide}>Close</Button>
        <a href="/">or Login</a> 
    </Form>
                      </Row>
                    </Container>
                  </Modal.Body>
                </Modal>
              
        
        )

    }
        
    
  }
  
  export default StrapModal;
