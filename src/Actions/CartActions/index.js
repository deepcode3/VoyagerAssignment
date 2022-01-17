export const addItem = (item, index) => {
  return { type: 'ADD_ITEM', payload: { item, index } };
};
export const removeItem = (item, restaurant, index) => {
  return { type: 'REMOVE_ITEM', payload: { item, restaurant, index } };
};
export const increaseItemQuantity = (item, restaurant, index) => {
  return { type: 'INCREASE_ITEM_QUANTITY', payload: { item, restaurant, index } };
};
export const decreaseItemQuantity = (item, restaurant, index) => {
  return { type: 'DECREASE_ITEM_QUANTITY', payload: { item, restaurant, index } };
};
export const removeAllRestaurantItems = (restaurant, index) => {
  return { type: 'CLEAR_CART', payload: { restaurant, index } };
};
