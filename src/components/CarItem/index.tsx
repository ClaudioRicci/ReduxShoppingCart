import React from "react";

const CartItem = ({
  id,
  name,
  description,
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
    <div>
      <span>{description}</span>
    </div>
    <div>
      <span>Units: {units}</span>
      <div className="unitButtons">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  </li>
);

export default CartItem;
