import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import theme from "./theme";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <main className='py-3 justify-content-center'>
          <Container>
            <Switch>
              <Route path='/' exact component={HomeScreen} />
              <Route path='/product/:id' component={ProductScreen} />
              {/* id is optional */}
              <Route path='/cart/:id?' component={CartScreen} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
