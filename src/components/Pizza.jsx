import React, {useState} from "react";
import { Card, Button, Row, Col, CardBody, Modal } from "react-bootstrap";

const Pizza = (props) => {
    const[varient, setVarient] = useState('small');
    const[quantity, setQuantity] = useState(1);
    const[show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Card style={{ width: "18rem" }} >
            <Card.Img variant="top" src={props.lapizza.image} onClick={handleShow}/>
            <CardBody>
                <Card.Title>{props.lapizza.name}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col md={6}>
                            <h6>Size : 
                            <select 
                                // la valeur par defaut est celle de la variable d'état
                                value={varient}
                                
                                // pour mettre à jour l'état
                                onChange={(e) => setVarient(e.target.value)}
                            >
                                {props.lapizza.varients.map(varient => (
                                    <option>{varient}</option>
                                )) }
                            </select>
                            </h6>
                        </Col>
                        <Col md={6}>
                            <h6>
                            <select
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            >
                                {[ ...Array(10).keys()].map((v,i) => (
                                    <option>{i+1}</option>
                                ))}
                            </select>
                            </h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            Price : {props.lapizza.prices[0][varient] * quantity} €
                        </Col>
                        <Col md={6}>
                            <Button className="bg-warning text-light" >Add</Button>
                        </Col>
                    </Row>
                </Card.Text>
            </CardBody>
        </Card>
        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.lapizza.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={props.lapizza.image}/></Modal.Body>
            <Modal.Footer>
                <Col>
                <h6>
                    Description :
                </h6>
                <p>{props.lapizza.description}</p>
                </Col>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
};

export default Pizza;
