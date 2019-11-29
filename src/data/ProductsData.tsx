const productsData = [
  {
    id: 1,
    name: "Beans",
    description: "Baked Beans",
    price: 0.5,
    onOffer: true,
    offerQuantityNeedToBuy: 3,
    offerQuantityForThePriceOf: 2,
    offerPrice: 0.33,
    byWeight: false,
    individualWeight: 150,
    volumeType: "kg",
    discountType: "group"
  },
  {
    id: 2,
    name: "Coke",
    description: "Coke can",
    price: 0.7,
    onOffer: true,
    offerQuantityNeedToBuy: 2,
    offerQuantityForThePriceOf: 2,
    offerPrice: 0.5,
    byWeight: false,
    individualWeight: 330,
    volumeType: "ml",
    discountType: "price"
  },
  {
    id: 3,
    name: "Orange",
    description: "Orange",
    price: 1.99,
    onOffer: false,
    offerQuantityNeedToBuy: 0,
    offerQuantityForThePriceOf: 0,
    offerPrice: 0,
    byWeight: true,
    individualWeight: 0.2,
    volumeType: "kg",
    discountType: "none"
  }
];

export default productsData;
