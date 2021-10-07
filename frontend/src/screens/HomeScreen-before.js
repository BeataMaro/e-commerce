import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //res.data
      const { data } = await axios.get("/api/shop");
      // const { data } = await axios.get("/api/products");
      //proxy we frontend/package.json określa localhost na 8000 a nie 3000
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Col className='text-center'>
        <h2>Ostatnio ogladane</h2>
      </Col>
      <Row className='align-items-center'>
        {products.map((product) => (
          <Col md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
