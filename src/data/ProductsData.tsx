const productsData = [
  {
    id: 1,
    name: "Beans",
    description: "Baked Beans",
    img: "./images/beans.jpg",
    price: 0.5,
    onOffer: true,
    offerQuantityNeeded: 3,
    offerPrice: 0.33,
    byWeight: false,
    individualWeight: 150,
    volumeType: "kg"
  },
  {
    id: 2,
    name: "Coke",
    description: "Bottle of Coke",
    img: "./images/coke-can.jpg",
    price: 0.7,
    onOffer: true,
    offerQuantityNeeded: 2,
    offerPrice: 0.5,
    byWeight: false,
    individualWeight: 330,
    volumeType: "ml"
  },
  {
    id: 3,
    name: "Orange",
    description: "Orange",
    img: "./images/orange.jpg",
    price: 1.99,
    onOffer: true,
    offerQuantityNeeded: 0,
    offerPrice: 0,
    byWeight: true,
    individualWeight: 0.2,
    volumeType: "kg"
  }
];

export default productsData;
