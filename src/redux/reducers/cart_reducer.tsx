// action ={
//     type: "STRING",
//     payload: "DATA"
// }

const INITIAL_STATE = [
  {
    id: 1,
    name: "Beans",
    description: "Baked Beans",
    img: "./images/beans.jpg",
    price: 0.5,
    onOffer: true,
    offerQuantityNeeded: 3,
    offerPrice: 0.333,
    byWeight: false,
    individualWeight: 150,
    volumeType: "kg",
    units: 1
  }
];

export default function cartReducer(state = INITIAL_STATE, action = {}) {
  return state;
}
