import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className='rounded p-3 my-2' key={product._id}>
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
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
    </Card>
  );
};

export default Product;
