import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';

const userObjectContext = {
  firstname: 'John',
};

export const UserContext = createContext(userObjectContext);
const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(userObjectContext);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>
  );
};
UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default UserContextProvider;
