import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

//actions
import { listProducts } from "../actions/productActions";

//components
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Col className='text-center'>
        <h2>Ostatnio ogladane</h2>
      </Col>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>Something went wrong {error}</Message>
      ) : (
        <Row className='align-items-center'>
          {products?.map((product) => (
            <Col md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
