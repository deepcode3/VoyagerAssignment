export const addAccount = (account) => {
  return { type: 'ADD_ACCOUNT', account };
};
export const editAccount = (account) => {
  return { type: 'EDIT_ACCOUNT', account };
};
export const changePassword = (data) => {
  return { type: 'CHANGE_PASSWORD', data };
};
