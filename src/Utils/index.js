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
