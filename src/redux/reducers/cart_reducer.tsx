import { ADD_TO_CART } from "../actions/card_actions";
import { cartReducerAction } from "../../interfaces";

const INITIAL_STATE = [
  {
    id: 1,
    name: "Beans",
    description: "Baked Beans",
    price: 0.5,
    onOffer: true,
    offerQuantityNeeded: 3,
    offerPrice: 0.333,
    byWeight: false,
    individualWeight: 150,
    volumeType: "kg",
    units: 1
  }
];

export default function cartReducer(
  state = INITIAL_STATE,
  action: cartReducerAction
) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, product.id);

      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnits(cart, product)
          : [...cart, product];
      return updatedCart;
    }
  }
  return state;
}

const findProductIndex = (cart, productID) => {
  return cart.findIndex(p => p.id === productID);
};

const updateProductUnits = (cart, product) => {
  const productIndex = findProductIndex(cart, product.id);

  const updatedCart = [...cart];
  const existingProduct = updatedCart[productIndex];

  const updatedUnitsProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units
  };

  updatedCart[productIndex] = updatedUnitsProduct;
  return updatedCart;
};
