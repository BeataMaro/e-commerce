import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header shop />
      <Container>
        <section className='my-5'>
          <h2>O firmie</h2>
          <Row>
            <Col lg={6}>
              <Card className='d-flex flex-row'>
                <Col xs={6}>
                  <Card.Img
                    src='/images/pexels-michael-burrows-workshop.jpg'
                    alt=''
                  />
                  <Card.Img src='/images/pexels-sam-lion-5709661.jpg' alt='' />
                </Col>
                <Col xs={6}>
                  <Card.Body>
                    <Card.Title> Nasza pracownia</Card.Title>
                    <Card.Text>
                      Laboris aute ipsum est aute. Laboris aute ipsum est
                      aute.Laboris aute ipsum est aute. Laboris aute ipsum est
                      aute.Laboris aute ipsum est aute.Laboris aute ipsum est
                      aute.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className='d-flex flex-row'>
                <Col xs={6}>
                  <Card.Body>
                    <Card.Title className='text-center'>
                      Kreatywność od dwóch pokoleń
                    </Card.Title>
                    <Card.Text className='text-center'>
                      Laboris aute ipsum est aute.Laboris aute ipsum est
                      aute.Laboris aute ipsum est aute. Laboris aute ipsum
                      estaute. Laboris aute ipsum est aute. Laboris aute
                      ipsumest aute.Laboris aute ipsum est aute. Laboris
                      auteipsum est aute.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col xs={6}>
                  <Card.Img
                    src='/images/pexels-michael-burrows-7147954.jpg'
                    alt=''
                  />
                  <Card.Img
                    src='/images/pexels-andrea-piacquadio-sew-machine.jpg'
                    alt=''
                  />
                  <Card.Img
                    src='/images/pexels-cottonbro-young-woman.jpg'
                    alt=''
                  />
                </Col>
              </Card>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col md={6}>
              <Image
                src='/images/alexander-andrews-black-machine-unsplash.jpg'
                alt=''
              />
            </Col>
            <Col md={6}>
              <Image src='/images/pexels-cottonbro-measure.jpg' alt='' />
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default About;
