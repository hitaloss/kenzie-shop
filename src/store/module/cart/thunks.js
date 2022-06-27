import { cartAdd, cartRemove } from "./actions";

export const addCardThunk = (food) => (dispatch) => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const item = items.find((item) => item.id === food.id);
  let itemToAdd = null;
  if (item) {
    item.count += 1;
    itemToAdd = item;
  } else {
    food.count = 1;
    itemToAdd = food;
  }
  const newItems = [...items, itemToAdd];
  localStorage.setItem("cart", JSON.stringify(newItems));
  dispatch(cartAdd(itemToAdd));
};

export const removeCardThunk = (food) => (dispatch) => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];

  const filteredItems = items.filter((item) => item.title !== food.title);

  localStorage.setItem("cart", JSON.stringify(filteredItems));
  dispatch(cartRemove(food));
};
