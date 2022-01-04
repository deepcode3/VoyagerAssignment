import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';

// const userObjectContext = {
//   firstname: '',
// };

export const UserContext = createContext(JSON.parse(localStorage.getItem('curntUser')));
const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('curntUser')));
  const resetCurrentUser = (data) => {
    setCurrentUser(data);
    localStorage.setItem('curntUser', JSON.stringify(data));
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ currentUser, resetCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default UserContextProvider;
