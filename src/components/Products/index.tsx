import React from "react";
import Product from "../Product";

export default class Products extends React.PureComponent<any, any> {
  addToCart = product => {
    this.props.addToCartAction(product);
  };

  render() {
    const { products } = this.props;
    return (
      <>
        {products.map(p => (
          <Product key={p.id} {...p} addFunc={this.addToCart} />
        ))}
      </>
    );
  }
}
