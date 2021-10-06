import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Header from "../components/Header";
import Rating from "../components/Rating";

//actions

import { listProductsDetails } from "../actions/productActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

const StyledListGroupItem = styled(ListGroupItem)`
  background-color: white;
  color: ${({ theme }) => theme.colors.main};
`;

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Header shop />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>Coś poszło nie tak.</Message>
      ) : (
        <Container>
          <Link className='btn btn-light' to='/shop'>
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
                <ListGroupItem>
                  Opis produktu: {product.description}
                </ListGroupItem>
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
                  {product.countInStock > 0 && (
                    <StyledListGroupItem>
                      <Row>
                        <Col>Ilość</Col>
                        <Col>
                          <Form.Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (q) => (
                                <option key={q + 1} value={q + 1}>
                                  {q + 1}
                                </option>
                              )
                            )}
                          </Form.Select>
                        </Col>
                      </Row>
                    </StyledListGroupItem>
                  )}
                  <StyledListGroupItem>
                    <Row className='d-grid'>
                      <Button
                        type='button'
                        onClick={addToCartHandler}
                        disabled={product.countInStock === 0}
                      >
                        Dodaj do koszyka
                      </Button>
                    </Row>
                  </StyledListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductScreen;
