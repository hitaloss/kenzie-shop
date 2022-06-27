import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const cartAdd = (food) => ({
  type: ADD_CART,
  food,
});

export const cartRemove = (food) => ({
  type: REMOVE_CART,
  food,
});
