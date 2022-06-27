import { ADD_CART, REMOVE_CART } from "./actionTypes";
const data = JSON.parse(localStorage.getItem("cart"));

function cartReducer(state = data || [], action) {
  switch (action.type) {
    case ADD_CART:
      const item = state.filter((item) => item.id !== action.food.id);
      return [...item, action.food];
    case REMOVE_CART:
      const newFoods = state.filter((item) => item.title !== action.food.title);
      state = newFoods;
      return state;

    default:
      return state;
  }
}

export default cartReducer;
