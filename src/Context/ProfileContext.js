import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const addressContext = createContext({
  addressItems: [],
  addItem: () => {},
  removeItem: () => {},
});

const AddressContextProvider = (props) => {
  const [addressItems, setAddressItems] = useState([]);
  useEffect(() => {
    const storedvalues1 = JSON.parse(localStorage.getItem('address'));
    if (storedvalues1) {
      setAddressItems(storedvalues1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('address', JSON.stringify(addressItems));
  }, [addressItems]);

  const addItem = (i) => {
    if (addressItems === null) setAddressItems([i]);
    if (addressItems) {
      setAddressItems([...addressItems, i]);
    }
  };
  const removeItem = (itemToBeDeleted) => {
    setAddressItems(
      addressItems.filter((item) => {
        return itemToBeDeleted !== item;
      })
    );
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    addressItems,
    addItem,
    removeItem,
  };
  // eslint-disable-next-line react/destructuring-assignment
  return <addressContext.Provider value={value}>{props.children}</addressContext.Provider>;
};

export default AddressContextProvider;
AddressContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
