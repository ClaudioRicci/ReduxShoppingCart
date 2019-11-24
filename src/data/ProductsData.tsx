const productsData = [
  {
    id: 1,
    name: "Beans",
    description: "Baked Beans",
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
    description: "Coke can",
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
    price: 1.99,
    onOffer: false,
    offerQuantityNeeded: 0,
    offerPrice: 0,
    byWeight: true,
    individualWeight: 0.2,
    volumeType: "kg"
  }
];

export default productsData;
