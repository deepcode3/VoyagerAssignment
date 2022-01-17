/* eslint-disable  default-param-last */
/* eslint-disable prefer-destructuring */
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
    case 'EDIT_PROFILE': {
      const objIndex = state.accounts.findIndex((obj) => {
        return obj.email === action.data.email;
      });
      const newAccounts = [...state.accounts];
      newAccounts[objIndex].firstname = action.data.fullname.split(' ')[0];
      newAccounts[objIndex].lastname = action.data.fullname.split(' ')[1];
      newAccounts[objIndex].countrycode = action.data.mobilenumber.split(' ')[0];
      newAccounts[objIndex].mobile = action.data.mobilenumber.split(' ')[1];
      newAccounts[objIndex].username = action.data.username;
      return { ...state, accounts: newAccounts };
    }
    case 'ADD_ITEM': {
      console.log(action.payload);
      const updatedCart = [...state.accounts[action.payload.index].cart, action.payload.item];
      const updatedAccount = state.accounts[action.payload.index];
      updatedAccount.cart = updatedCart;
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedAccount;
      const updatedUser = { ...state.currentUser, cart: updatedCart };
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }

    default:
      return state;
  }
};
export default rootReducer;
