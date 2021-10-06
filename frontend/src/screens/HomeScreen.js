import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";

//actions
import { listProducts } from "../actions/productActions";

//components
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <Container>
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
    </Container>
  );
};

export default HomeScreen;
