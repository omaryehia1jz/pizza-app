import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {KOrder} from '../components/KOrder';
import {Knav} from '../components/Knav';
export function Kpending() {
  return (
    <>
    <Knav/>
    <Container className='d-flex flex-wrap'>
    <KOrder/>
    <KOrder/>
    <KOrder/>
    <KOrder/>
    <KOrder/>
    <KOrder/>
    </Container>
    </>

  );
}
