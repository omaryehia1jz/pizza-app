import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Main } from '../pages/Main';
import { Items } from './ItemsDetails';
import delivery from '../images/delivery.png';
import { Image } from 'react-bootstrap';
import { Checkout } from '../pages/Checkout';


export function Cart() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <Image src={delivery} width='30px' />
            </Button> {' '}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Items /> <Items /> <Items /> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={Main}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Checkout}>
                        Checkout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
// render(<Moodal />);

