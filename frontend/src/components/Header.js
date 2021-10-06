import React from "react";
import { Link, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faRedhat } from "@fortawesome/free-brands-svg-icons";

import SearchBox from "./SearchBox";

const Header = ({ shop }) => {
  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Przebrała się miarka</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
              {shop && (
                <>
                  <LinkContainer to='/'>
                    <Nav.Link>
                      <FontAwesomeIcon icon={faRedhat} className='me-1' />
                      Blog
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/cart'>
                    <Nav.Link>
                      <Link to='/cart'>
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className='me-1'
                        />
                        Koszyk
                      </Link>
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}

              {!shop && (
                <LinkContainer to='/shop'>
                  <Nav.Link>
                    {" "}
                    <FontAwesomeIcon icon={faShoppingCart} className='me-1' />
                    Sklep
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
