import React from "react";

const CartItem = ({
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
  discountType,
  units
}) => (
  <li>
    <div>
      <span>Units: {units}</span>
      <div className="unitButtons">
        <button>+</button>
        <button>-</button>
      </div>

      <h3>{name}</h3>
      <p>
        {price.toFixed(2)}
        {byWeight ? ` per ${volumeType}` : ""}
      </p>
      {onOffer ? (
        <div className="offerBox">
          <p>
            {offerQuantityNeedToBuy} for {discountType === "group" ? "" : "£"}
            {discountType === "group" ? (
              <>{offerQuantityForThePriceOf}</>
            ) : (
              Math.round(offerQuantityNeedToBuy * offerPrice).toFixed(2)
            )}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  </li>
);

export default CartItem;
