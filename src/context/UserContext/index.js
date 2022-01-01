import {
  React, useState, createContext, useMemo
} from 'react';
import PropTypes from 'prop-types';

const userObjectContext = {
  name: 'John',
  email: 'john.snow@thewall.north',
  password: '123',
};

export const UserContext = createContext(userObjectContext);

const ProviderComponent = ({ children }) => {
  const [context, setContext] = useState(userObjectContext);
  // eslint-disable-next-line arrow-body-style
  const value = useMemo(() => [context, setContext], [context]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
ProviderComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ProviderComponent;
