export const addAccount = (account) => {
  return { type: 'ADD_ACCOUNT', account };
};
export const changePassword = (data) => {
  return { type: 'CHANGE_PASSWORD', data };
};
export const editProfile = (data) => {
  return { type: 'EDIT_PROFILE', data };
};