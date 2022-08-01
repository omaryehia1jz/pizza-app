import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import delivery from '../images/delivery.png';
import { Image, Button } from 'react-bootstrap';
import fork from '../images/fork.png';
import { Cart } from './modal';
import { Checkout } from '../pages/Checkout';



function NavBar() {
  return (

    <Navbar className='fixed-top' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">OBSD <Image src={fork} width='20px' /></Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="Checkout">Checkout</Nav.Link>
          <Cart/>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

