import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const cartContext = createContext({
  cartItems: [],
  addItem: () => {},
  deleteItem: () => {},
  clearCartContext: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
});

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')));
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  const addItem = (item) => {
    if (cartItems === null) setCartItems([item]);
    if (cartItems) {
      // eslint-disable-next-line no-shadow
      setCartItems((cartItems) => {
        return [...cartItems, item];
      });
    }
  };
  const deleteItem = (id) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.item !== id;
      })
    );
  };
  const clearCartContext = () => {
    localStorage.clear('cartItems');
    window.location.reload();
  };
  const increaseItemQuantity = (id) => {
    const updatedArray = [...cartItems];
    const index = updatedArray.findIndex((item) => {
      return item.item === id;
    });
    updatedArray[index].quantity += 1;
    setCartItems(updatedArray);
  };
  const decreaseItemQuantity = (id) => {
    const updatedArray = [...cartItems];
    const index = updatedArray.findIndex((item) => {
      return item.item === id;
    });
    updatedArray[index].quantity -= 1;
    setCartItems(updatedArray);
  };
  const itemsOfRestaurant = (restaurantName) => {
    if (cartItems === null) {
      return null;
    }
    const result = cartItems.filter((obj) => {
      return obj.restaurant === restaurantName;
    });
    return result;
  };
  const restaurantItemsCount = (restaurantName) => {
    const result = itemsOfRestaurant(restaurantName);
    if (result === null) {
      return 0;
    }
    return result.length;
  };
  const totalPrice = (restaurantName) => {
    if (cartItems === null) {
      return 0;
    }
    const result = cartItems.filter((obj) => {
      return obj.restaurant === restaurantName;
    });
    if (result === null) {
      return 0;
    }
    function amount(item) {
      return item.price * item.quantity;
    }
    function sum(prev, next) {
      return prev + next;
    }

    const total = result.map(amount).reduce(sum, 0);
    return total;
  };

  const removeAllRestaurantItems = (restaurantName) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.restaurant !== restaurantName;
      })
    );
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    cartItems,
    addItem,
    deleteItem,
    clearCartContext,
    increaseItemQuantity,
    decreaseItemQuantity,
    restaurantItemsCount,
    totalPrice,
    removeAllRestaurantItems,
    itemsOfRestaurant,
  };
  // eslint-disable-next-line react/destructuring-assignment
  return <cartContext.Provider value={value}>{props.children}</cartContext.Provider>;
};

export default CartContextProvider;
CartContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
