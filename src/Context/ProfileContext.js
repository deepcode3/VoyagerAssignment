import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ProfileContext = createContext({
  addressItems: [],
  addItem1: () => {},
  removeItem1: () => {},
  paymentItems: [],
  addItem2: () => {},
  removeItem2: () => {},
});

const ProfileContextProvider = (props) => {
  const [addressItems, setAddressItems] = useState([]);
  const [paymentItems, setPaymentItems] = useState([]);
  useEffect(() => {
    const storedvalues1 = JSON.parse(localStorage.getItem('address'));
    if (storedvalues1) {
      setAddressItems(storedvalues1);
    }
  }, []);
  useEffect(() => {
    const storedvalues2 = JSON.parse(localStorage.getItem('payment'));
    if (storedvalues2) {
      setPaymentItems(storedvalues2);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('address', JSON.stringify(addressItems));
  }, [addressItems]);
  useEffect(() => {
    localStorage.setItem('payment', JSON.stringify(paymentItems));
  }, [paymentItems]);

  const addItem1 = (i) => {
    if (addressItems === null) setAddressItems([i]);
    if (addressItems) {
      setAddressItems([...addressItems, i]);
    }
  };
  const addItem2 = (i) => {
    if (paymentItems === null) setPaymentItems([i]);
    if (paymentItems) {
      setPaymentItems([...paymentItems, i]);
    }
  };

  const removeItem1 = (itemToBeDeleted) => {
    setAddressItems(
      addressItems.filter((item) => {
        return itemToBeDeleted !== item;
      })
    );
  };
  const removeItem2 = (itemToBeDeleted) => {
    setPaymentItems(
      paymentItems.filter((item) => {
        return itemToBeDeleted !== item;
      })
    );
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    addressItems,
    addItem1,
    removeItem1,
    paymentItems,
    addItem2,
    removeItem2,
  };
  // eslint-disable-next-line react/destructuring-assignment
  return <ProfileContext.Provider value={value}>{props.children}</ProfileContext.Provider>;
};

export default ProfileContextProvider;
ProfileContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
