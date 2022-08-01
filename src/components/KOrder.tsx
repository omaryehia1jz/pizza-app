import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export function KOrder() {
    return (
      <Card style={{ width: '18rem',margin:'100px auto auto 100px' }}>
        <Card.Header>Order1</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>first item </ListGroup.Item>
          <ListGroup.Item>sec item </ListGroup.Item>
          <ListGroup.Item> third item</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
  