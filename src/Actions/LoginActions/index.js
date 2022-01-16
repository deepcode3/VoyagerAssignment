export const signOut = () => {
  return { type: 'SIGN_OUT' };
};
export const signIn = (data) => {
  console.log(data);
  return { type: 'SIGN_IN', data };
};
