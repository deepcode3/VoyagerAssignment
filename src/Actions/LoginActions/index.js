export const signOut = () => {
  return { type: 'SIGN_OUT' };
};
export const signIn = (data) => {
  return { type: 'SIGN_IN', data };
};
