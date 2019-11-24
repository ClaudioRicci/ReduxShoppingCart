import * as React from "react";
import "./Product.scss";

const Product = ({
  id,
  img,
  name,
  description,
  price,
  addFunc,
  onOffer,
  offerQuantityNeeded,
  offerPrice,
  byWeight,
  individualWeight,
  volumeType,
  units
}: {
  id: any;
  img: string;
  name: string;
  description: string;
  price: number;
  addFunc: any;
  onOffer: boolean;
  offerQuantityNeeded: string;
  offerPrice: number;
  byWeight: boolean;
  individualWeight: number;
  volumeType: string;
  units: number;
}) => {
  return (
    <div className="ProductCard">
      <article id={id}>
        <h2>
          <span>Name:</span> {name}
        </h2>
        <img src={img} alt={name} />
        <h3>
          <span>Description:</span> {description},
          {byWeight ? "" : `${individualWeight} ${volumeType}`}
        </h3>
        <p>
          <span>Price:</span>&pound;{price}{" "}
          {byWeight ? `per ${volumeType}` : ""}
        </p>
        {onOffer ? (
          <div className="offerBox">
            <h4>Special Offer:</h4>
            <p>{offerQuantityNeeded} for the price of </p>
          </div>
        ) : (
          ""
        )}
      </article>
      <button
        onClick={() => addFunc({ id, img, name, description, price, units: 1 })}
      >
        Add
      </button>
    </div>
  );
};
export default Product;
