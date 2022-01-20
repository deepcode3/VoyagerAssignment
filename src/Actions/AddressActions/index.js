export const addAddress = (item, index) => {
  return { type: 'ADD_ADDRESS', payload: { item, index } };
};
export const removeAddress = (item, index) => {
  return { type: 'REMOVE_ADDRESS', payload: { item, index } };
};
