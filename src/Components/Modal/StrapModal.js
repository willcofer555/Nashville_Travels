import React from 'react' ;
import { Modal, Container, InputGroup, FormControl, Form } from 'react-bootstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Button, Label, Col } from 'reactstrap';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


export class StrapModal extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            city: '',
            zipCode: '',
            touched: {
                firstName: false,
                lastName: false,
                email: false,
                password: false,
                address: false,
                city: false,
                zipCode: false

            }
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
      console.log('current state is: ' + JSON.stringify(values));
      alert('Current state is: ' + JSON.stringify(values));
      /* push data to SQL */
      
  }


    render(){
      let {numNights, perNight, cleaningFee, start, end} = this.props;
      let subTotal = numNights * perNight;
      let tax = (numNights * perNight)* 0.10;
      
      return (
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
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
              <LocalForm onSubmit={values => this.handleSubmit(values)}>
              
              <Row className="form-group" row>
            <Label htmlFor="firstName" md={2}> Name</Label>
            <Col className="mb-2" md={5}>            
            <Control.text
            id="firstName"
            name="firstName" 
            model=".firstName"
            className="form-control"
            placeholder="First"
            validators = {{
              required
            }}
            />
            <Errors
          className="text-danger"
          model=".firstName"
          show="touched"
          component="div"
          messages={{
          required: 'Required',
          minLength: 'Must be at least 2 characters',
          maxLength: 'Must be 15 characters or less'
          }}
          />
            </Col>
            
            <Col className="mb-2" md={5}>            
            <Control.text
            id="lastName"
            name="lastName" 
            model=".lastName"
            className="form-control"
            placeholder="Last"
            validators = {{
              required,
              minLength: minLength(3),
              maxLength: maxLength(12)
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
            </Row>

            


            <Row className="form-group" row>
            <Label htmlFor="email" md={2}>Email</Label>
            <Col className="mb-2" md={10}>            
            <Control.text
            id="email"
            name="email" 
            model=".email"
            className="form-control"
            placeholder="Enter email"
            validators = {{
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
            </Row>
            <Row className="form-group" row>
            <Label htmlFor="password" md={2}>Password</Label>
            <Col md={10}>
            <Control.text id="passoword" 
            name="password" 
            model=".password"
            className="form-control"
            placeholder="Password" 
            validators = {{

            }}
            />
            <Errors
          className="text-danger"
          model=".password"
          show="touched"
          component="div"
          messages={{
          required: 'Required',
          minLength: 'Must be at least 2 characters',
          maxLength: 'Must be 15 characters or less'
          }}
          />
            </Col>
            </Row>
          <Row className="form-group">
          <Label htmlFor="address" md={2} >Address</Label>
          <Col md={10}>
          <Control.text id="address" 
          name="address" 
          model=".address"
          className="form-control"
          placeholder="Address" 
          validators= {{

          }}
          />
          <Errors
          className="text-danger"
          model=".address"
          show="touched"
          component="div"
          messages={{
          required: 'Required',
          minLength: 'Must be at least 2 characters',
          maxLength: 'Must be 15 characters or less'
          }}
          />
          </Col>
          </Row>


    <Row className="form-group" row>
    <Label htmlFor="city" md={2} >City</Label>
      <Col md={4}>
      <Control.text  id="city" name="city"
        model=".city"  
        className="form-control"  
        placeholder="City" 
        validators={{ 
        required, 
        minLength: minLength(4),
        maxLength: maxLength(15)
        }}                                        
        /> 
        <Errors
          className="text-danger"
          model=".city"
          show="touched"
          component="div"
          messages={{
          required: 'Required',
          minLength: 'Must be at least 2 characters',
          maxLength: 'Must be 15 characters or less'
          }}
          />
      </Col>
      <Label htmlFor="state" md={1}>State</Label>
  <Col md={5}>
  <Control.select 
    model=".state"
   className="form-control ml-2"
   id="state" name="state"
   placeholder="State"
   validators={{
   required
  }}                   
   />
   <Errors
          className="text-danger"
          model=".state"
          show="touched"
          component="div"
          messages={{
          required: 'Required',
          minLength: 'Must be at least 2 characters',
          maxLength: 'Must be 15 characters or less'
          }}
          />
  </Col>
      </Row>


<Row className="form-group" row>
<Label htmlFor="zipCode" md={2}>Zip</Label>
  <Col md={10}>
  <Control.text
  model=".zipCode"
  className="form-control"
  id="zipCode" name="zipCode"
  placeholder="Zip Code"
  validators={{
      required, 
      minLength: minLength(5),
      maxLength: maxLength(9)
  }} 
  />
  <Errors
          className="text-danger"
          model=".zipCode"
          show="touched"
          component="div"
          messages={{
          required: 'Required',
          minLength: 'Must be at least 2 characters',
          maxLength: 'Must be 15 characters or less'
          }}
          />
  </Col>
  </Row>

<Row className="form-group">
<Col xs={12} md={12} className="mb-3">
${this.props.perNight} x {this.props.numNights} Nights
</Col>
<Col xs={12} md={12} className="mb-3">
 +  ${this.props.cleaningFee} Cleaning Fee
</Col>
<Col xs={12} md={12} className="mb-3">
+  ${tax} (10%)
</Col>
<Col xs={12} md={12} className="mb-3">
Total: Total
</Col>
</Row>
<hr></hr>

<Button className="btn-primary mr-3" type="submit" oncClick={this.props.reserve}> Reserve</Button>
<Button className="btn-secondary mr-3" onClick={this.props.onHide}>Close</Button>
<a href="/">or Login</a> 
</LocalForm>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      )

    }
       
    
    
  }
  
  export default StrapModal;


  
            
            