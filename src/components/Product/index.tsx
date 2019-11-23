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
    <>
      <article id={id}>
        <h2>Name: {name}</h2>
        <h3>Description: {description}</h3>
        <img src={img} alt={name} />
        <p>Price: &pound;{price}</p>
      </article>
      <button
        onClick={() => addFunc({ id, img, name, description, price, units: 1 })}
      >
        Add
      </button>
    </>
  );
};
export default Product;
