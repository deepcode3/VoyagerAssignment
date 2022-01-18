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
      const updatedCart = [...state.accounts[action.payload.index].cart, action.payload.item];
      const updatedUser = { ...state.currentUser, cart: updatedCart };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    case 'REMOVE_ITEM': {
      const currentCart = [...state.currentUser.cart];
      const updatedCart = currentCart.filter((item) => {
        return !(
          item.item === action.payload.item && item.restaurant === action.payload.restaurant
        );
      });
      const updatedUser = { ...state.currentUser, cart: updatedCart };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    case 'INCREASE_ITEM_QUANTITY': {
      const currentCart = [...state.currentUser.cart];
      const indexTobeUpdated = currentCart.findIndex((item) => {
        return item.item === action.payload.item && item.restaurant === action.payload.restaurant;
      });
      currentCart[indexTobeUpdated].quantity += 1;
      const updatedUser = { ...state.currentUser, cart: currentCart };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    case 'DECREASE_ITEM_QUANTITY': {
      const currentCart = [...state.currentUser.cart];
      let updatedCart = currentCart;
      const indexTobeUpdated = currentCart.findIndex((item) => {
        return item.item === action.payload.item && item.restaurant === action.payload.restaurant;
      });
      if (currentCart[indexTobeUpdated].quantity === 1) {
        updatedCart = currentCart.filter((item) => {
          return !(
            item.item === action.payload.item && item.restaurant === action.payload.restaurant
          );
        });
      } else {
        updatedCart = currentCart;
        updatedCart[indexTobeUpdated].quantity -= 1;
      }
      const updatedUser = { ...state.currentUser, cart: updatedCart };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    case 'CLEAR_CART': {
      const currentCart = [...state.currentUser.cart];
      const updatedCart = currentCart.filter((item) => {
        return item.restaurant !== action.payload.restaurant;
      });

      const updatedUser = { ...state.currentUser, cart: updatedCart };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    case 'ADD_ADDRESS': {
      const updatedAddress = [...state.accounts[action.payload.index].address, action.payload.item];
      const updatedUser = { ...state.currentUser, address: updatedAddress };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    case 'REMOVE_ADDRESS': {
      const currentAddress = [...state.currentUser.address];
      const updatedAddress = currentAddress.filter((item) => {
        return !(item === action.payload.item);
      });
      const updatedUser = { ...state.currentUser, address: updatedAddress };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    case 'ADD_CARD': {
      const updatedCards = [...state.accounts[action.payload.index].cards, action.payload.item];
      const updatedUser = { ...state.currentUser, address: updatedCards };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    case 'REMOVE_CARD': {
      const currentCards = [...state.currentUser.cards];
      const updatedCards = currentCards.filter((item) => {
        return !(item === action.payload.item);
      });
      const updatedUser = { ...state.currentUser, address: updatedCards };
      const newAccounts = [...state.accounts];
      newAccounts[action.payload.index] = updatedUser;
      return { ...state, accounts: newAccounts, currentUser: updatedUser };
    }
    default:
      return state;
  }
};
export default rootReducer;
