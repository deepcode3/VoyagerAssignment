/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuHalfCompo from '../../Components/MenuSemiCompo';
import searchIcon from '../../Assets/Icons/searchIcon.png';
import item1 from '../../Assets/Images/item1.png';
import item2 from '../../Assets/Images/item2.jpeg';
import item3 from '../../Assets/Images/item3.jpeg';
import item4 from '../../Assets/Images/item4.jpeg';
import item5 from '../../Assets/Images/item5.jpeg';
import item6 from '../../Assets/Images/item6.jpeg';
import item7 from '../../Assets/Images/item7.jpeg';
import item8 from '../../Assets/Images/item8.jpeg';
import item9 from '../../Assets/Images/item9.jpeg';
import bestSeller from '../../Assets/Icons/bestSeller.png';
import nonVeg from '../../Assets/Icons/nonveg.png';
import veg from '../../Assets/Icons/vegicon.png';
import increaseButton from '../../Assets/Icons/increaseButton.png';
import decreaseButton from '../../Assets/Icons/decreaseButton.png';
import costShowHideButton from '../../Assets/Icons/collapseButton.png';
import proceedToCheckOutButton from '../../Assets/Icons/proceedToCheckOut.png';
import emptyImg from '../../Assets/Images/empty.png';
import catButton from '../../Assets/Icons/cart.png';
import menuCartCloseButton from '../../Assets/Icons/dismissButton.png';
import './Menu.css';
import Footer from '../../Components/Footer';
import {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeAllRestaurantItems,
} from '../../Actions/CartActions';
import { findIndex, itemsOfRestaurant, totalPrice } from '../../Utils';

const Menu = () => {
  const index = findIndex();
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });

  const dispatch = useDispatch();
  const { searchKey } = useParams();
  const { location } = useParams();
  const { restaurant } = useParams();
  const { item } = useParams();
  const [searchItem, setSearchItem] = useState('');
  const [costDeatilsButton, setcostDetailsButton] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const history = useHistory();
  const data = [
    {
      name: 'Chilli Cheese Meal',
      cost: 27.0,
      description:
        'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce',
      bestSeller: true,
      category: 'recomended',
      image: item1,
      customizable: true,
      type: 'non-veg',
    },
    {
      name: 'Canapes and Crostini',
      cost: 27.0,
      description: 'Clams, mussels, calamari & shrimp w/ white wine & garlic',
      bestSeller: false,
      category: 'recomended',
      image: item2,
      customizable: false,
      type: 'veg',
    },
    {
      name: 'Herb spiced chiken sandwitch',
      cost: 27.0,
      description:
        'Roasted chick peas, julienne carrots, wild mushrooms & manchego w/ cider vinaigrette',
      bestSeller: true,
      category: 'recomended',
      image: item3,
      customizable: false,
      type: 'non-veg',
    },
    {
      name: 'Canapes',
      cost: 27.0,
      description:
        'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
      bestSeller: false,
      category: 'Appetizers',
      image: item4,
      customizable: true,
      type: 'non-veg',
    },
    {
      name: 'Stuffed Cherry Peppers',
      cost: 27.0,
      description:
        'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
      bestSeller: false,
      category: 'Appetizers',
      image: item5,
      customizable: false,
      type: 'non-veg',
    },
    {
      name: 'Broiled Brie with Cranberry Chutney',
      cost: 27.0,
      description:
        'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
      bestSeller: false,
      category: 'Appetizers',
      image: item6,
      customizable: true,
      type: 'non-veg',
    },
    {
      name: 'Charred Spanish Octopus',
      cost: 27.0,
      description:
        'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
      bestSeller: false,
      category: 'Soups',
      image: item8,
      customizable: true,
      type: 'non-veg',
    },
    {
      name: 'Oysters on the Half Shell',
      cost: 27.0,
      description:
        'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
      bestSeller: true,
      category: 'Soups',
      image: item9,
      customizable: true,
      type: 'non-veg',
    },
    {
      name: 'Chicken Tortilla',
      cost: 27.0,
      description:
        'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
      bestSeller: true,
      category: 'Soups',
      image: item7,
      customizable: true,
      type: 'non-veg',
    },
    {
      name: 'Charred Spanish',
      cost: 27.0,
      description:
        'Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.',
      bestSeller: false,
      category: 'Soups',
      image: item2,
      customizable: true,
      type: 'non-veg',
    },
  ];
  const isItemInCart = (item) => {
    if (currentUser.cart.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const value of Object.values(currentUser.cart)) {
        if (value.item === item.name && value.restaurant === restaurant && value.status === true) {
          return true;
        }
      }
    }
    return false;
  };
  const getTotalPriceWithDiscount = (restaurant) => {
    const discount = 24.22;
    const totalprice = totalPrice(restaurant, currentUser);
    if (totalprice !== 0) return totalprice + 10 - discount;
    return 0;
  };
  return (
    <div className='mainMenuDiv'>
      <MenuHalfCompo
        searchKey={searchKey}
        location={location}
        restaurant={restaurant}
        item={item}
        from='menu'
        setIsCartClicked={setIsCartClicked}
      />
      <div className='menuBg'>
        <div className='menuSeperator'>
          <input
            type='text'
            className='menuSearch'
            placeholder='Search an item'
            onChange={(e) => {
              return setSearchItem(e.target.value);
            }}
          />
          <img src={searchIcon} alt='' className='menuSearchIcon' />
          {!isCartClicked ? (
            <img
              src={catButton}
              alt=''
              className='cartButton'
              onClick={() => {
                setIsCartClicked(true);
              }}
              onKeyDown={null}
            />
          ) : (
            <img
              src={menuCartCloseButton}
              alt=''
              className='menuCartCloseButton'
              onClick={() => {
                setIsCartClicked(false);
              }}
              onKeyDown={null}
            />
          )}
          <div className={isCartClicked ? 'dispMenuCart' : 'menuCart'}>
            {itemsOfRestaurant(restaurant, currentUser) !== null ? (
              <>
                <div className='menuCartHeader'>My Order</div>
                <div
                  className='menuClearCart'
                  onClick={() => {
                    dispatch(removeAllRestaurantItems(restaurant, index));
                  }}
                  role='button'
                  onKeyDown={null}
                >
                  Clear cart
                </div>
                <div className='menuCartLine1' />
                <div className='menuCartItems'>
                  {Object.values(currentUser.cart)
                    // eslint-disable-next-line array-callback-return
                    // eslint-disable-next-line consistent-return
                    .filter((value) => {
                      if (value.status === true && value.restaurant === restaurant) {
                        return value;
                      }
                    })
                    .map((item) => {
                      return (
                        <div className='menuCartItem' key={item.item}>
                          {item.isVeg === false ? (
                            <img src={nonVeg} alt='' className='menuCartnonVeg' />
                          ) : (
                            <img src={veg} alt='' className='menuCartVeg' />
                          )}
                          <div className='menuCartItemName'>{item.item}</div>
                          <div className='menuCartItemPrice'>
                            AED
                            {item.price}
                            .00
                          </div>
                          <div className='itemQuantitySetter'>
                            <img
                              src={decreaseButton}
                              className='decreseButton'
                              alt=''
                              onClick={() => {
                                return dispatch(decreaseItemQuantity(item.item, restaurant, index));
                              }}
                              onKeyDown={null}
                            />
                            <span className='quantity'>{item.quantity}</span>
                            <img
                              src={increaseButton}
                              className='increaseButton'
                              alt=''
                              onClick={() => {
                                return dispatch(increaseItemQuantity(item.item, restaurant, index));
                              }}
                              onKeyDown={null}
                            />
                          </div>
                          {item.addOn ? (
                            <div className='menuCartItemAddOn'>{item.addOn}</div>
                          ) : null}
                          {item.isCustomizable ? (
                            <div className='menuCartCustomizable'>
                              Customize
                              <div className='menuCartCustomizableArrow' />
                            </div>
                          ) : null}
                          <div
                            className={
                              item.isCustomizable && !item.addOn
                                ? 'menuCartRemove3'
                                : item.isCustomizable
                                ? 'menuCartRemove'
                                : 'menuCartRemove2'
                            }
                            onClick={() => {
                              return dispatch(removeItem(item.item, restaurant, index));
                            }}
                            role='button'
                            onKeyDown={null}
                          >
                            Remove
                          </div>
                          <div
                            className={
                              item.isCustomizable && !item.addOn
                                ? 'menuCartBoxLine3'
                                : item.isCustomizable
                                ? 'menuCartBoxLine'
                                : 'menuCartBoxLine2'
                            }
                          />
                        </div>
                      );
                    })}
                </div>
                <div className='price'>
                  <span className='priceLabel'>To Pay</span>
                  <div className='totalPriceDiscount'>
                    AED
                    {getTotalPriceWithDiscount(restaurant).toFixed(2)}
                  </div>
                  <img
                    src={costShowHideButton}
                    className={
                      costDeatilsButton ? 'showCostDetailsButton' : 'hideCostDetailsButton'
                    }
                    alt=''
                    onClick={() => {
                      return costDeatilsButton
                        ? setcostDetailsButton(false)
                        : setcostDetailsButton(true);
                    }}
                    onKeyDown={null}
                  />
                </div>
                {costDeatilsButton ? (
                  <div className='priceDetails'>
                    <div className='totalPrice'>
                      <span className='itemsTotalLabel'>Items Total</span>
                      <span className='totalAmount'>
                        AED
                        {totalPrice(restaurant).toFixed(2)}
                      </span>
                    </div>
                    <div className='charges'>
                      <span className='itemsTotalLabel'>Fee/Charges</span>
                      <span className='totalAmount'>AED10.00</span>
                    </div>
                    <div className='discount'>
                      <span className='itemsTotalLabel'>Discount</span>
                      <span className='totalAmount'>AED24.22</span>
                    </div>
                  </div>
                ) : null}
                <img
                  className='proccedToCheckOutButton'
                  src={proceedToCheckOutButton}
                  alt=''
                  onClick={() => {
                    history.push({ pathname: '/address', state: { restaurant } });
                  }}
                  onKeyDown={null}
                />
              </>
            ) : (
              <>
                <img className='emptyCartImage' src={emptyImg} alt='' />
                <div className='emptyCartText'>There are no items in cart</div>
              </>
            )}
          </div>
          <div className='menuList'>
            <div className='menuRecomended'>
              <span className='menuRecamendedLabel'>Recomended(3)</span>
              {data
                .filter((item) => {
                  if (searchItem === '') {
                    return item;
                  }
                  if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                    return item;
                  }
                })
                .map((item) => {
                  return item.category === 'recomended' ? (
                    <div className='menuRecomandedItemBox' key={item.name}>
                      <img src={item.image} alt='' className='itemImage' />
                      <div className='recomendedItemName'>{item.name}</div>
                      {item.type === 'non-veg' ? (
                        <img src={nonVeg} alt='' className='nonVeg' />
                      ) : (
                        <img src={veg} alt='' className='veg' />
                      )}
                      <div className='recomendedItemCost'>
                        AED
                        {item.cost}
                        .00
                      </div>
                      {item.customizable === true ? (
                        <div className='recomendedCustomizable'>Customizable</div>
                      ) : (
                        <div className='recomendedCustomizable' />
                      )}
                      <div
                        className={
                          item.customizable ? 'recomendedDescription' : 'recomendedDescription1'
                        }
                      >
                        {item.description}
                      </div>
                      {item.bestSeller === true ? (
                        <img
                          className={item.customizable ? 'bestSellerIcon' : 'bestSellerIcon1'}
                          src={bestSeller}
                          alt=''
                        />
                      ) : (
                        <div className='bestSellerIcon' />
                      )}
                      {isItemInCart(item) ? (
                        <>
                          <span
                            className={item.bestSeller ? 'alreadyInCart' : 'alreadyInCart1'}
                            key={item.name}
                          >
                            Already in Cart
                          </span>
                          <div
                            className={
                              item.bestSeller ? 'addAgainToCartButton' : 'addAgainToCartButton1'
                            }
                            onClick={() => {
                              return dispatch(increaseItemQuantity(item.name, restaurant, index));
                            }}
                            role='button'
                            onKeyDown={null}
                          >
                            <span className='addAgainToCartButtonText'>ADD AGAIN</span>
                          </div>
                        </>
                      ) : (
                        <div
                          className={item.bestSeller ? 'addToCart' : 'addToCart1'}
                          onClick={() => {
                            return dispatch(
                              addItem(
                                {
                                  restaurant,
                                  item: item.name,
                                  price: item.cost,
                                  icon: item.image,
                                  isCustomizable: item.customizable,
                                  isVeg: item.Type === 'non-veg',
                                  status: true,
                                  quantity: 1,
                                },
                                index
                              )
                            );
                          }}
                          role='button'
                          onKeyDown={null}
                        >
                          <span className='addToCartText'>ADD</span>
                        </div>
                      )}
                    </div>
                  ) : null;
                })}
            </div>
            <div className='menuApptizers'>
              <span className='menuApptizersLabel'>Apptizers</span>
              {data
                // eslint-disable-next-line consistent-return
                .filter((item) => {
                  if (searchItem === '') {
                    return item;
                  }
                  if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                    return item;
                  }
                })
                .map((item) => {
                  return item.category === 'Appetizers' ? (
                    <div className='menuApptizersItemBox' key={item.name}>
                      <img src={item.image} alt='' className='itemImage' />
                      <div className='recomendedItemName'>{item.name}</div>
                      {item.type === 'non-veg' ? (
                        <img src={nonVeg} alt='' className='nonVeg' />
                      ) : (
                        <img src={veg} alt='' className='veg' />
                      )}
                      <div className='recomendedItemCost'>
                        AED
                        {item.cost}
                        .00
                      </div>
                      {item.customizable === true ? (
                        <div className='recomendedCustomizable'>Customizable</div>
                      ) : (
                        <div className='recomendedCustomizable' />
                      )}
                      <div
                        className={
                          item.customizable ? 'recomendedDescription' : 'recomendedDescription1'
                        }
                      >
                        {item.description}
                      </div>
                      {item.bestSeller === true ? (
                        <img
                          className={item.bestSeller ? 'bestSellerIcon' : 'bestSellerIcon1'}
                          src={bestSeller}
                          alt=''
                        />
                      ) : (
                        <div className='bestSellerIcon' />
                      )}
                      {isItemInCart(item) ? (
                        <>
                          <span
                            className={
                              item.bestSeller ? 'apptizeralreadyInCart' : 'apptizeralreadyInCart1'
                            }
                            key={item.name}
                          >
                            Already in Cart
                          </span>
                          <div
                            className={
                              item.bestSeller
                                ? 'apptizeraddAgainToCartButton'
                                : 'apptizeraddAgainToCartButton1'
                            }
                            onClick={() => {
                              return dispatch(increaseItemQuantity(item.name, restaurant, index));
                            }}
                            role='button'
                            onKeyDown={null}
                          >
                            <span className='addAgainToCartButtonText'>ADD AGAIN</span>
                          </div>
                        </>
                      ) : (
                        <div
                          className={item.bestSeller ? 'apptizeraddToCart' : 'apptizeraddToCart'}
                          onClick={() => {
                            return dispatch(
                              addItem(
                                {
                                  restaurant,
                                  item: item.name,
                                  price: item.cost,
                                  icon: item.image,
                                  isCustomizable: item.customizable,
                                  isVeg: item.Type === 'non-veg',
                                  status: true,
                                  quantity: 1,
                                },
                                index
                              )
                            );
                          }}
                          role='button'
                          onKeyDown={null}
                        >
                          <span className='addToCartText'>ADD</span>
                        </div>
                      )}
                    </div>
                  ) : null;
                })}
            </div>
            <div className='menuSoups'>
              <span className='menuSoupsLabel'>Soups</span>
              {data
                // eslint-disable-next-line consistent-return
                .filter((item) => {
                  if (searchItem === '') {
                    return item;
                  }
                  if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                    return item;
                  }
                })
                .map((item) => {
                  return item.category === 'Soups' ? (
                    <div className='menuSoupsItemBox' key={item.name}>
                      <img src={item.image} alt='' className='itemImage' />
                      <div className='recomendedItemName'>{item.name}</div>
                      {item.type === 'non-veg' ? (
                        <img src={nonVeg} alt='' className='nonVeg' />
                      ) : (
                        <img src={veg} alt='' className='veg' />
                      )}
                      <div className='recomendedItemCost'>
                        AED
                        {item.cost}
                        .00
                      </div>
                      {item.customizable === true ? (
                        <div className='recomendedCustomizable'>Customizable</div>
                      ) : null}
                      <div className='recomendedDescription'>{item.description}</div>
                      {item.bestSeller === true ? (
                        <img className='bestSellerIcon' src={bestSeller} alt='' />
                      ) : null}
                      {isItemInCart(item) ? (
                        <>
                          <span
                            className={
                              item.bestSeller ? 'soupsAlreadyInCart' : 'soupsAlreadyInCart1'
                            }
                            key={item.name}
                          >
                            Already in Cart
                          </span>
                          <div
                            className={
                              item.bestSeller
                                ? 'soupsAddAgainToCartButton'
                                : 'soupsAddAgainToCartButton1'
                            }
                            onClick={() => {
                              return dispatch(increaseItemQuantity(item.name, restaurant, index));
                            }}
                            onKeyDown={null}
                            role='button'
                          >
                            <span className='addAgainToCartButtonText'>ADD AGAIN</span>
                          </div>
                        </>
                      ) : (
                        <div
                          className={item.bestSeller ? 'soupsAddToCart' : 'soupsAddToCart1'}
                          onClick={() => {
                            return dispatch(
                              addItem(
                                {
                                  restaurant,
                                  item: item.name,
                                  price: item.cost,
                                  icon: item.image,
                                  isCustomizable: item.customizable,
                                  isVeg: item.Type === 'non-veg',
                                  status: true,
                                  quantity: 1,
                                },
                                index
                              )
                            );
                          }}
                          role='button'
                          onKeyDown={null}
                        >
                          <span className='addToCartText'>ADD</span>
                        </div>
                      )}
                    </div>
                  ) : null;
                })}
            </div>
          </div>
        </div>
        <div className='footerDivMenu'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Menu;
