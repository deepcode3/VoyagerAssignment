import { React, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const UserContext = createContext(JSON.parse(localStorage.getItem('curntUser')));

const UserContextProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('curntUser')));
  const signOut = () => {
    setCurrentUser(null);
    localStorage.setItem('curntUser', JSON.stringify(null));
    history.push('/');
  };
  const signIn = (data) => {
    setCurrentUser(data);
    localStorage.setItem('curntUser', JSON.stringify(data));
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ currentUser, signOut, signIn }}>{children}</UserContext.Provider>
  );
};
UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default UserContextProvider;
