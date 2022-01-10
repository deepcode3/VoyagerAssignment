/* eslint-disable prefer-destructuring */
import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AccountsContext = createContext(JSON.parse(localStorage.getItem('createdAccounts')));
const AccountsContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem('createdAccounts')));
  const checkIfAccountExists = (data) => {
    if (accounts === null) {
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
  const checkIfNumberExists = (data) => {
    if (accounts === null) {
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
  const addAccount = (data) => {
    data.username = data.firstname;
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
  const editProfile = (data) => {
    const objIndex = accounts.findIndex((obj) => {
      return obj.email === data.email;
    });
    accounts[objIndex].firstname = data.name.split(' ')[0];
    accounts[objIndex].lastname = data.name.split(' ')[1];
    accounts[objIndex].code = data.mobilenumber.split(' ')[0];
    accounts[objIndex].mobile = data.mobile.split(' ')[1];
    accounts[objIndex].username = data.username;
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
        editProfile,
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
