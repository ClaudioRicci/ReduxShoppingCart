import React, { Component } from "react";
import Product from "./components/Product";
import productsData from "./data/ProductsData";

const products = productsData;
type AppProps = {};
type AppState = { name: string; cart: any };

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "React",
      cart: [
        {
          id: 1,
          name: "Beans",
          description: "Baked Beans",
          img: "./images/beans.jpg",
          price: 0.5,
          onOffer: true,
          offerQuantityNeeded: 3,
          offerPrice: 0.33,
          byWeight: false,
          individualWeight: 150,
          volumeType: "kg",
          units: 1
        }
      ]
    };
  }

  render() {
    return (
      <main>
        <ul>
          {this.state.cart.map(item => (
            <li>
              {item.name} | {item.units}
            </li>
          ))}
        </ul>
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </main>
    );
  }
}

export default App;
