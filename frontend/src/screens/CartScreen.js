import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
//actions
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, history, location }) => {
  const productId = match.params.id;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qty = Number(location?.search?.split("=")[1]) || 1; //query params ?qty=4
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  //?qty=1

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div>
      CART
      <Button>Remove</Button>
    </div>
  );
};

export default CartScreen;
