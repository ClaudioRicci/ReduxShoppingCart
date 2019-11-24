export const ADD_TO_CART = "ADD_TO_CART";

export function addToCartAction({
  id,
  name,
  description,
  img,
  price,
  onOffer,
  offerQuantityNeeded,
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
      img,
      price,
      onOffer,
      offerQuantityNeeded,
      offerPrice,
      byWeight,
      individualWeight,
      volumeType,
      units
    }
  };
}
