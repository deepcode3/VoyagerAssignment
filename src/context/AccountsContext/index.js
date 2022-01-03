import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';

const createdAccounts = [
  {
    firstname: 'John',
    lastname: 'Salvankar',
    email: 'john.salvankar@gmail.com',
    password: '123',
    conuntrycode: '91',
    mobile: '97978787878',
  },
  {
    firstname: 'Amar',
    lastname: 'Anchan',
    email: 'amar@gmail.com',
    password: '123',
    conuntrycode: '91',
    mobile: '97978787878',
  },
];
export const AccountsContext = createContext(createdAccounts);
const AccountsContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState(createdAccounts);
  const checkIfAccountExists = (data) => {
    const result = accounts.filter((obj) => {
      return obj.email === data.email;
    });
    return result;
  };
  const addAccount = (data) => {
    setAccounts([...accounts, data]);
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
