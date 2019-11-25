import React from "react";
import CartItem from "../CarItem";
import "./CartList.scss";

type CartListProps = { cart: any };
type CartListState = { name: string; cart: any };

export default class CartList extends React.PureComponent<
  CartListProps,
  CartListState
> {
  render() {
    const { cart } = this.props;
    return (
      <div className="shoppingCart">
        <h1>Shopping List</h1>
        <ul>
          {cart.map(item => (
            <CartItem {...item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}
