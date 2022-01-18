export const addCard = (item, index) => {
  return { type: 'ADD_CARD', payload: { item, index } };
};
export const removeCard = (item, index) => {
  return { type: 'REMOVE_CARD', payload: { item, index } };
};
