import React from "react";

const CartItem = ({
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
}) => (
  <li>
    <img src={img} alt={description} />
    <div>
      <span>{name}</span>
      <span>{description}</span>
    </div>
    <div>
      <span>Units: {units}</span>
      <button>+</button>
      <button>-</button>
    </div>
  </li>
);

export default CartItem;
