import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartAction } from "./redux/actions/card_actions";
import productsData from "./data/ProductsData";
import Products from "./components/Products";
import CartList from "./components/CartList";

// const data = productsData;
type AppProps = { cart: any; addToCartAction: any };
type AppState = { name: string; cart: any };

class App extends Component<AppProps, AppState> {
  render() {
    const { cart, addToCartAction } = this.props;
    console.log("cart from state " + this.props.cart);
    return (
      <main>
        <Products products={productsData} addToCartAction={addToCartAction} />
        <CartList cart={cart} />
      </main>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart
  };
};

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      addToCartAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionsToProps)(App);
