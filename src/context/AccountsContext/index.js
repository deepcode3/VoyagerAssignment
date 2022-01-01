import {
  React, useState, createContext, useMemo
} from 'react';
import PropTypes from 'prop-types';

const accounts = [
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
export const AccountsContext = createContext(accounts);
const ProviderComponent = ({ children }) => {
  const [context, setContext] = useState(accounts);
  // eslint-disable-next-line arrow-body-style
  const value = useMemo(() => [context, setContext], [context]);
  return <AccountsContext.Provider value={value}>{children}</AccountsContext.Provider>;
};
ProviderComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ProviderComponent;
