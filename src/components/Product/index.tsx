import * as React from "react";
import "./Product.scss";

const Product = ({
  id,
  img,
  name,
  description,
  price,
  addFunc
}: {
  id: any;
  img: string;
  name: string;
  description: string;
  price: number;
  addFunc: any;
}) => {
  // const Product = ({
  //   id,
  //   name,
  //   descrption,
  //   img,
  //   price,
  //   onOffer,
  //   offerQuantityNeeded,
  //   offerPrice,
  //   byWeight,
  //   individualWeight,
  //   volumeType
  // }) => {
  return (
    <div className="ProductCard">
      <article id={id}>
        <h2>
          <span>Name:</span> {name}
        </h2>
        <img src={img} alt={name} />
        <h3>
          <span>Description:</span> {description}
        </h3>
        <p>
          <span>Price:</span> &pound;{price}
        </p>
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
