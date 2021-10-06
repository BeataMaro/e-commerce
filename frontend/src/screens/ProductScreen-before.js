import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
// import products from "../products";

const StyledListGroupItem = styled(ListGroupItem)`
  background-color: white;
  color: ${({ theme }) => theme.colors.main};
`;

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      //res.data
      const { data } = await axios.get(`/api/products/${match.params.id}`); //proxy we frontend/package.json określa localhost na 8000 a nie 3000

      // const product = await data.find((item) => item._id === match.params.id);
      setProduct(data);
    };
    fetchProduct();
  }, [match]); //dependency

  return (
    <>
      <Link className='btn btn-light' to='/'>
        Wróć
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem variant='light'>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                rate={product.rating}
                numReviews={`${product.numReviews} ocen`}
              />
            </ListGroupItem>
            <ListGroupItem>{product.price}zł</ListGroupItem>
            <ListGroupItem>Opis produktu: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <StyledListGroupItem>
                <Row>
                  <Col>Suma:</Col>
                  <Col>{product.price}zł</Col>
                </Row>
              </StyledListGroupItem>
              <StyledListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "Dostępny" : "Niedostępny"}
                  </Col>
                </Row>
              </StyledListGroupItem>
              <StyledListGroupItem>
                <Row className='d-grid'>
                  <Button type='button' disabled={product.countInStock === 0}>
                    Dodaj do koszyka
                  </Button>
                </Row>
              </StyledListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
