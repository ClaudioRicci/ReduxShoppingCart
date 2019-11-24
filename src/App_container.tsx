import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./components/Products";
import productsData from "./data/ProductsData";
import CartList from "./components/Cart/CartList";

// const data = productsData;
type AppProps = { cart: any };
type AppState = { name: string; cart: any };

class App extends Component<AppProps, AppState> {
  render() {
    console.log("cart from state " + this.props.cart);
    return (
      <main>
        <CartList cart={this.props.cart} />
        <Products products={productsData} />
      </main>
    );
  }
}

const mapStateToProp = ({ cart }) => {
  return {
    cart: cart
  };
};

export default connect(mapStateToProp)(App);
