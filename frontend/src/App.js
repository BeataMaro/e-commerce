import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import theme from "./theme";
import HomeScreen from "./screens/HomeScreen";
import BlogScreen from "./screens/BlogScreen";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <main className='py-3 justify-content-center'>
          <Switch>
            <Route path='/' exact component={BlogScreen} />
            {/* <Route path='/search/:keyword' component={HomeScreen} /> */}
            <Route path='/shop' component={ShopScreen} />
            <Route path='/search/:keyword' component={ShopScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            {/* id is optional */}
            <Route path='/cart/:id?' component={CartScreen} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
