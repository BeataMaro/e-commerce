import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const StyledCard = styled(Card)`
  background-color: #ded6d9;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

  a {
    overflow: hidden;
    img {
      transition: 0.2s ease-in;
    }
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const Product = ({ product }) => {
  return (
    <StyledCard className='rounded pb-3 my-2' key={product._id}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>{product.name}</Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating rate={product.rating} numReviews={product.numReviews} />
        </Card.Text>
        <Card.Text as='h4'> {product.price}zł</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

export default Product;
