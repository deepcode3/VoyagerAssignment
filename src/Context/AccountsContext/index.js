import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';

// const createdAccounts = [
//   {
//     firstname: 'John',
//     lastname: 'Salvankar',
//     email: 'john.salvankar@gmail.com',
//     password: '123',
//     conuntrycode: '91',
//     mobile: '97978787878',
//   },
//   {
//     firstname: 'Amar',
//     lastname: 'Anchan',
//     email: 'amar@gmail.com',
//     password: '123',
//     conuntrycode: '91',
//     mobile: '97978787878',
//   },
// ];
export const AccountsContext = createContext(JSON.parse(localStorage.getItem('createdAccounts')));
const AccountsContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem('createdAccounts')));
  const checkIfAccountExists = (data) => {
    if (accounts == null) {
      return null;
    }
    const result = accounts.filter((obj) => {
      return obj.email === data.email;
    });
    return result;
  };
  const addAccount = (data) => {
    if (accounts === null) {
      localStorage.setItem('createdAccounts', JSON.stringify(data));
      setAccounts([data]);
    } else {
      setAccounts([...accounts, data]);
      localStorage.setItem('createdAccounts', JSON.stringify([...accounts, data]));
    }
  };
  return (
    /* eslint-disable react/jsx-no-constructed-context-values */
    <AccountsContext.Provider
      value={{
        accounts,
        setAccounts,
        checkIfAccountExists,
        addAccount,
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
