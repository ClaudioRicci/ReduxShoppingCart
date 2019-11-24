import React from "react";
import CartItem from "./CartItem";

type CartListProps = { cart: any };
type CartListState = { name: string; cart: any };

export default class CartList extends React.PureComponent<
  CartListProps,
  CartListState
> {
  render() {
    const { cart } = this.props;
    return (
      <ul>
        {cart.map(item => (
          <CartItem {...item} key={item.id} />
        ))}
      </ul>
    );
  }
}
