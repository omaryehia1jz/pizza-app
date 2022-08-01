import checked from '../images/checked.png';
import { Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Items} from '../components/ItemsDetails'



export function Checkout() {
            
  return (
        <div className='d-flex'>
            <Form style={{marginTop:'100px',marginLeft:'100px', width:'50%' ,paddingRight:'50px' ,borderRight:'1px solid gray'}} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                       Required
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="mobile" placeholder="Enter Your Phone Number" />
                    <Form.Text className="text-muted">
                       Required
                    </Form.Text>
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="name" placeholder="Enter Address" />
                    <Form.Text className="text-muted">
                       Required
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="name" placeholder="Enter City" />
                    <Form.Text className="text-muted">
                       Required
                    </Form.Text>
                </Form.Group>

                <Button style={{marginRight:'50px'}} variant="danger" type="submit">
                    Place Order
                </Button>
                <Button variant="primary" type="submit">
                    Cancel
                </Button>
            </Form>

            {/* <div >
            <Items/>
             <Items/>
              <Items/>
               <Items/>
               </div> */}
            
            
        </div>
            );
}
















