import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Row>
            <Col className='text-center py-3'>
              <h2>Main</h2>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <HomeScreen />
          </Row>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
