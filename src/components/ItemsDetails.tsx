import pizza from '../images/pizza.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Badge, Button } from 'react-bootstrap';
import { useState } from 'react';




export function Items() {

  const [count, setCount] = useState(0)

  function handleChange(value: number) {

    if (value === 1) {
      setCount(function (prevCount) {
        return prevCount + 1
      })
    }
    else {
      setCount(function (prevCount) {
        if (prevCount === 0) {
          return prevCount
        } return prevCount - 1
      })
    }
  }

  return (
    <div >
      <Card className='  border-0' style={{ width: '70%', height: '50%'  }}>
        <Card.Img style={{marginLeft:'50px'}} variant="top" src={pizza} />
        <Card.Body style={{marginLeft:'40px'}} >
          <Card.Title style={{marginLeft:'70px'}}>Seafood</Card.Title>
          <Card.Text className='d-flex justify-content-center align-items-center gap-2' style={{marginLeft:'40px'}}>
            Shrimp,Squid
          </Card.Text>
          <div style={{marginLeft:'40px'}} className='d-flex justify-content-center align-items-center gap-2'>
            <Button onClick={() => handleChange(-1)} size='sm' style={{ backgroundColor: "red" }}>-</Button>
            <Badge className='p-2' bg="secondary">{count}</Badge>
            <Button onClick={() => handleChange(1)} size='sm' >+</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}