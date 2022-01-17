export const addItem = (item, index) => {
  return { type: 'ADD_ITEM', payload: { item, index } };
};
export const removeItem = (item, index) => {
  return { type: 'REMOVE_ITEM', payload: { item, index } };
};
