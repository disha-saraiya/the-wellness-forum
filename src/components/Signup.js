import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';


function Signup(){
    return(
        <div className = "container">
            <br />
            <Form>

            <Form.Label>Name</Form.Label>
            <Row>
            <Col>
            <Form.Control placeholder="First name" />
            </Col>
            <Col>
            <Form.Control placeholder="Last name" />
            </Col>
            </Row>

            <br />
        
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="confirmpassword" placeholder="Confirm Password" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        )
}

export default Signup; 