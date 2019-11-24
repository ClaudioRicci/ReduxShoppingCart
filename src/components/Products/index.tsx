import React from "react";
import Product from "../Product";

export default class Products extends React.PureComponent<any, any> {
  state = {
    cart: [
      {
        id: 1,
        name: "Beans",
        description: "Baked Beans",
        img: "./images/beans.jpg",
        price: 0.5,
        onOffer: true,
        offerQuantityNeeded: 3,
        offerPrice: 0.333,
        byWeight: false,
        individualWeight: 150,
        volumeType: "kg",
        units: 1
      }
    ]
  };

  findProductIndex = (cart, productID) => {
    return cart.findIndex(p => p.id === productID);
  };

  updateProductUnits = (cart, product) => {
    const productIndex = this.findProductIndex(cart, product.id);

    const updatedProducts = [...cart];
    const existingProduct = updatedProducts[productIndex];

    const updatedUnitsProduct = {
      ...existingProduct,
      units: existingProduct.units + product.units
    };

    updatedProducts[productIndex] = updatedUnitsProduct;
    return updatedProducts;
  };

  addToCart = product => {
    const { cart } = this.state;
    const existingProductIndex = this.findProductIndex(cart, product.id);

    this.setState({
      cart:
        existingProductIndex >= 0
          ? this.updateProductUnits(cart, product)
          : [...cart, product]
    });
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
