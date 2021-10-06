import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Blog = () => {
  return (
    <section>
      <Container fluid>
        <Row className='my-5 d-flex'>
          <Col md={6}>
            <h2 className='text-center my-3'>BLOG</h2>
            <Image
              src='/images/pexels-trace-hudson-lama.jpg'
              alt='lama'
              fluid
            />
            <Card className='d-flex flex-row'>
              <Col md={6}>
                <Card.Img src='/images/pexels-anna-shvets-dog.jpg' alt='' />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Na jesienny spacer</Card.Title>
                  <Card.Text>Bądź w zgodzie z&nbsp;naturą.</Card.Text>
                </Card.Body>
              </Col>
            </Card>
            <Card className='d-flex flex-row'>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Wełna po godzinach</Card.Title>
                  <Card.Text>Najlepszy sposób na wygodną elegancję.</Card.Text>
                </Card.Body>
              </Col>
              <Col md={6}>
                <Card.Img
                  src='/images/anastasia-hisel-sweater-unsplash.jpg'
                  alt=''
                />
              </Col>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className='d-flex flex-row'>
              <Col md={6}>
                <Card.Img src='/images/pexels-arina-krasnikova.jpg' alt='' />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Ponadczasowa wełna</Card.Title>
                </Card.Body>
              </Col>
            </Card>
            <Card className='d-flex flex-row'>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Total look nie dla każdego? </Card.Title>
                </Card.Body>
              </Col>
              <Col md={6}>
                <Card.Img
                  src='/images/pexels-eyup-beyhan-total-look.jpg'
                  alt=''
                />
              </Col>
            </Card>
            <Card className='d-flex flex-row'>
              <Col lg={6}>
                <Card.Body>
                  <Card.Title>Naturalne włókna</Card.Title>
                </Card.Body>
              </Col>
              <Col md={6}>
                <Card.Img
                  src='/images/pexels-taryn-elliott-5464587.jpg'
                  alt=''
                />
              </Col>
            </Card>

            <Card className='d-flex flex-row'>
              <Col md={6}>
                <Card.Img
                  src='/images/khaled-ghareeb-qCCaBQ8b6lM-unsplash.jpg'
                  alt=''
                />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Nietuzinkowe projekty</Card.Title>
                </Card.Body>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
