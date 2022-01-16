/* eslint-disable  default-param-last */

const initState = {
  currentUser: null,
  accounts: [],
};

const rootReducer = (state = initState, action) => {
  if (action === undefined) return state;
  switch (action.type) {
    case 'SIGN_OUT': {
      return { ...state, currentUser: null };
    }
    case 'SIGN_IN': {
      return { ...state, currentUser: action.data };
    }
    case 'ADD_ACCOUNT': {
      const newAccounts = [...state.accounts, action.account];
      return { ...state, accounts: newAccounts };
    }
    case 'CHANGE_PASSWORD': {
      const objIndex = state.accounts.findIndex((obj) => {
        if (action.data.type === 'email') {
          return obj.email === action.data.email;
        }
        return obj.countrycode === action.data.countrycode && obj.mobile === action.data.mobile;
      });
      const newAccounts = [...state.accounts];
      newAccounts[objIndex].password = action.data.password;
      return { ...state, accounts: newAccounts };
    }
    default:
      return state;
  }
};
export default rootReducer;
