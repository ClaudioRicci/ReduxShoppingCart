export const ADD_TO_CART = "ADD_TO_CART";

export function addToCartAction({
  id,
  name,
  description,
  price,
  onOffer,
  offerQuantityNeedToBuy,
  offerQuantityForThePriceOf,
  offerPrice,
  byWeight,
  individualWeight,
  volumeType,
  units
}) {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      name,
      description,
      price,
      onOffer,
      offerQuantityNeedToBuy,
      offerQuantityForThePriceOf,
      offerPrice,
      byWeight,
      individualWeight,
      volumeType,
      units
    }
  };
}
