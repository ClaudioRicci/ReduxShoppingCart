import * as React from "react";
import "./Product.scss";

const Product = ({
  id,
  name,
  description,
  price,
  addFunc,
  onOffer,
  offerQuantityNeedToBuy,
  offerQuantityForThePriceOf,
  offerPrice,
  byWeight,
  individualWeight,
  volumeType,
  discountType,
  units
}: {
  id: any;
  name: string;
  description: string;
  price: number;
  addFunc: any;
  onOffer: boolean;
  offerQuantityNeedToBuy: number;
  offerQuantityForThePriceOf: number;
  offerPrice: number;
  byWeight: boolean;
  individualWeight: number;
  volumeType: string;
  discountType: string;
  units: number;
}) => {
  return (
    <div className="ProductCard">
      <article id={id}>
        <h2>
          <span>Name:</span> {name}
        </h2>
        <h3>
          <span>Description:</span> {description},
          {byWeight ? "" : `${individualWeight} ${volumeType}`}
        </h3>
        <p>
          <span>Price:</span>&pound;{price.toFixed(2)}{" "}
          {byWeight ? `per ${volumeType}` : ""}
        </p>
        {onOffer ? (
          <div className="offerBox">
            <h4>Special Offer:</h4>
            <p>{offerQuantityNeedToBuy} for</p> {offerQuantityForThePriceOf}
          </div>
        ) : (
          ""
        )}
      </article>
      <button
        onClick={() =>
          addFunc({
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
            units: 1
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default Product;
