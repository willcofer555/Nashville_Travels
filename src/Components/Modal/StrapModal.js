import React from 'react' ;
import { Modal, Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap';



export function StrapModal(props) {
    
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Reserve {props.address}
                </Modal.Title>
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
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
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
      <Form.Control as="select" value="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Col xs={12} md={12} className="mb-3">
    (Cost per night) for (/nights)
  </Col>
  <Col xs={12} md={12} className="mb-3">
    Cleaning Fee - $(cleaning fee)
  </Col>
  <Col xs={12} md={12} className="mb-3">
    Tax - ($0.00)
  </Col>
  <Col xs={12} md={12} className="mb-3">
    Total Cost - ( )
  </Col>
  </Form.Row>
  <hr></hr>
  
  <Button className="btn-primary mr-3" type="submit" oncClick={props.reserve}> Reserve</Button>
    <Button className="btn-secondary mr-3" onClick={props.onHide}>Close</Button>
    <a href="/">or Login to Continue</a> 
</Form>
                  </Row>
                </Container>
              </Modal.Body>
            </Modal>
          )
    
    
  }
  
  export default StrapModal;
