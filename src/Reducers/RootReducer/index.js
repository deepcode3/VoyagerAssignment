/* eslint-disable  default-param-last */
const initState = {
  currentUser: null,
  accounts: [],
};
const rootReducer = (state = initState, action) => {
  if (action === undefined) return state;
  console.log('state', state);
  switch (action.type) {
    case 'ADD_ACCOUNT': {
      const newAccounts = [...state.accounts, action.account];
      console.log('state', state);
      return { ...state, accounts: newAccounts };
    }
    case 'SIGN_OUT': {
      return { ...state, currentUser: null };
    }
    case 'SIGN_IN': {
      console.log(action.data);
      return { ...state, currentUser: action.data };
    }
    default:
      return state;
  }
};
export default rootReducer;
