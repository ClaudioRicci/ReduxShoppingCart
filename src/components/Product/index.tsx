import * as React from "react";
import "./Product.scss";

const Product = ({
  id,
  img,
  name,
  description,
  price
}: {
  id: any;
  img: string;
  name: string;
  description: string;
  price: number;
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
        <h2>{name}</h2>
        <h3>{description}</h3>
        <img src={img} alt={name} />
        <p>Price: &pound;{price}</p>
      </article>
      <button>Add</button>
    </>
  );
};
export default Product;
