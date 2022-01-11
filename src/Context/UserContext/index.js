import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const UserContext = createContext(JSON.parse(localStorage.getItem('curntUser')));
const UserContextProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('curntUser')));
  const setUser = (data) => {
    setCurrentUser(data);
    localStorage.setItem('curntUser', JSON.stringify(data));
  };
  const signOut = () => {
    setUser(null);
    history.push('/');
  };
  const signIn = (data) => {
    setUser(data);
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ currentUser, setUser, signOut, signIn }}>
      {children}
    </UserContext.Provider>
  );
};
UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default UserContextProvider;
