import { store } from '../Store';

export const checkIfAccountExists = (data) => {
  const { accounts } = store.getState();
  if (accounts.length === 0) {
    return 'Email id is not registered';
  }
  const result = accounts.filter((obj) => {
    return obj.email === data.email;
  });
  if (result.length === 0) {
    return 'Email id is not registered';
  }
  if (result[0].password !== data.password) {
    return 'Incorrect password entered';
  }
  return result[0];
};

export const checkIfNumberExists = (data) => {
  const { accounts } = store.getState();
  if (accounts.length === 0) {
    return 'Mobile number is not registered';
  }
  const result = accounts.filter((obj) => {
    return obj.countrycode === data.countrycode && obj.mobile === data.mobile;
  });
  if (result.length === 0) {
    return 'Mobile number is not registered';
  }
  return result[0];
};

export const findIndex = () => {
  const { currentUser, accounts } = store.getState();
  const objIndex = accounts.findIndex((obj) => {
    return obj.email === currentUser.email;
  });
  return objIndex;
};

export const itemsOfRestaurant = (restaurantName) => {
  const { currentUser } = store.getState();
  if (currentUser.cart.length === 0) {
    return null;
  }
  const result = currentUser.cart.filter((obj) => {
    return obj.restaurant === restaurantName;
  });
  if (result.length === 0) return null;
  return result;
};

export const totalPrice = (restaurantName) => {
  const { currentUser } = store.getState();
  if (currentUser.cart.length === 0) {
    return 0;
  }
  const result = itemsOfRestaurant(restaurantName);
  if (result === null) {
    return 0;
  }
  function amount(item) {
    return item.price * item.quantity;
  }
  function sum(prev, next) {
    return prev + next;
  }
  const total = result.map(amount).reduce(sum, 0);
  return total;
};

export const restaurantItemsCount = (restaurantName) => {
  const result = itemsOfRestaurant(restaurantName);
  if (result === null) {
    return 0;
  }
  return result.length;
};
