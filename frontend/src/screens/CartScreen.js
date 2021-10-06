import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import Message from "../components/Message";
//actions
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, history, location }) => {
  const productId = match.params.id;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const qty = Number(location?.search?.split("=")[1]) || 1; //query params ?qty=4
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  //?qty=1

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <Header shop />
      <Container>
        <Row className='my-5'>
          <Col md={8}>
            <h3>Koszyk</h3>

            {cartItems.length < 1 ? (
              <Message>Koszyk jest pusty.</Message>
            ) : (
              <ListGroup variant='flush'>
                {cartItems.map((product) => (
                  <ListGroup.Item key={product.product}>
                    <Row>
                      <Col sm={2}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fluid
                          rounded
                        />
                      </Col>
                      <Col sm={3}>
                        <Link to={`/product/${product.product}`}>
                          {product.name}
                        </Link>
                      </Col>
                      <Col sm={2}>{product.price}zł</Col>

                      <Col sm={2}>
                        <Form.Select
                          value={product.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(product.product, Number(e.target.value))
                            )
                          }
                        >
                          {" "}
                          {[...Array(product.countInStock).keys()].map((q) => (
                            <option key={q + 1} value={q + 1}>
                              {q + 1}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col sm={2}>
                        <Button onClick={() => handleRemove(product.product)}>
                          <FontAwesomeIcon icon={faTrashAlt} className='me-2' />
                          Usuń
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card className='my-5'>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h5>
                    Podsumowanie: (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  </h5>
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                  zł
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block'
                    disabled={cartItems.length === 0}
                    onClick={handleRemove}
                  >
                    Kup teraz
                  </Button>
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer>
                <Link className='btn btn-light' to='/shop'>
                  Kontynuuj zakupy
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
