import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const StyledCard = styled(Card)`
  background-color: hsl(180, 20%, 60%);
`;

const Product = ({ product }) => {
  return (
    <StyledCard className='rounded p-3 my-2' key={product._id}>
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant='top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as='div'>{product.name}</Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating rate={product.rating} numReviews={product.numReviews} />
        </Card.Text>
        <Card.Text as='h4'> ${product.price}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

export default Product;
