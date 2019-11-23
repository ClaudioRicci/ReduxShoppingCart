import React, { Component } from "react";
import Products from "./components/Products";
import productsData from "./data/ProductsData";

const data = productsData;
type AppProps = {};
type AppState = { name: string; cart: any };

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <main>
        {/* <ul>
          {this.state.cart.map(item => (
            <li>
              {item.name} | {item.units}
            </li>
          ))}
        </ul> */}
        <Products products={data} />
      </main>
    );
  }
}

export default App;
