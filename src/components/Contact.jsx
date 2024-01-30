import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FiPhoneCall } from "react-icons";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";


import { FaPhoneVolume } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Delicious</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate mollitia hic facilis, sed ad voluptates nam consequatur
              cum facere commodi voluptate ea temporibus repellendus a minima
              dignissimos labore. Magni sint nisi earum assumenda sit ullam
              distinctio eligendi voluptate excepturi voluptates exercitationem
              hic reprehenderit dignissimos commodi, minus cum porro. Corrupti
              voluptatem mollitia nihil enim totam quas dolor pariatur, fugiat
              quasi sit maxime ipsa cum beatae qui, quaerat adipisci nemo porro
              dolores deleniti ex consectetur nam magni laboriosam dignissimos?
              Odit officiis, velit magnam, aut accusamus mollitia molestiae
              dolorem eaque est laborum eos nobis voluptas pariatur ea magni ut
              at tenetur eum adipisci?
            </p>
          </Col>
          <Col md={6}>
            <img className="imagePizza" src="https://img.cuisineaz.com/1024x768/2018/02/28/i136025-pizza-legere.jpeg" alt=""/>
          </Col>
        </Row>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th colSpan={3}>-- Nos Coordonnées  --</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><FaPhoneVolume /></td>
              <td>Téléphone</td>
              <td>01 23 45 67 89</td>
            </tr>
            <tr>
              <td><FaMobileAlt /></td>
              <td>Portable</td>
              <td>01 98 76 54 32</td>
            </tr>
            <tr>
              <td><MdOutlineEmail /></td>
              <td>Email</td>
              <td>contact@pizza-delicious.com</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Contact;