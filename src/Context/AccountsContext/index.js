import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AccountsContext = createContext(JSON.parse(localStorage.getItem('createdAccounts')));
const AccountsContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem('createdAccounts')));
  const checkIfAccountExists = (data) => {
    if (accounts === null) {
      return null;
    }
    const result = accounts.filter((obj) => {
      return obj.email === data.email;
    });
    return result;
  };
  const checkIfNumberExists = (data) => {
    if (accounts === null) {
      return null;
    }
    const result = accounts.filter((obj) => {
      return obj.countrycode === data.countrycode && obj.mobile === data.mobile;
    });
    return result;
  };
  const addAccount = (data) => {
    if (accounts === null) {
      localStorage.setItem('createdAccounts', JSON.stringify([data]));
      setAccounts([data]);
    } else {
      setAccounts([...accounts, data]);
      localStorage.setItem('createdAccounts', JSON.stringify([...accounts, data]));
    }
  };
  const changePassword = (data) => {
    const objIndex = accounts.findIndex((obj) => {
      if (data.type === 'email') {
        return obj.email === data.email;
      }
      return obj.countrycode === data.countrycode && obj.mobile === data.mobile;
    });
    accounts[objIndex].password = data.password;
    localStorage.setItem('createdAccounts', JSON.stringify(accounts));
  };
  return (
    /* eslint-disable react/jsx-no-constructed-context-values */
    <AccountsContext.Provider
      value={{
        accounts,
        checkIfAccountExists,
        addAccount,
        changePassword,
        checkIfNumberExists,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
  /* eslint-enable react/jsx-no-constructed-context-values */
};
AccountsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AccountsContextProvider;
