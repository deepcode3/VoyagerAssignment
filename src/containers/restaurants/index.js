/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import SearchBar, { LocationSetter } from '../../components/homeComponents/searchbar';
import Logo from '../../components/logo';
import menuSemiBg from '../../assets/images/menuSemiBg.png';
import dateTime from '../../assets/icons/dateTime.png';
import menuButton from '../../assets/icons/menuButton.png';
import downArrow from '../../assets/icons/downArrow.png';
import hideButton from '../../assets/icons/hide.png';
import showButton from '../../assets/icons/show.png';
import checkBox from '../../assets/icons/checkBox.png';
import './restaurants.css';

const Restaurant = ({ data, searchKey, location }) => {
  const [TimeSortHide, setTimeSortHide] = useState(false);
  const [MinimumOrderHide, setMinimumOrderHide] = useState(false);
  const [deliveryTimevalue, setDeliveryTimeValue] = useState('30');
  const [averageMealCostValue, setAveregaeMealCostValue] = useState('30');
  const [minimumOrderValue, setMinimumOrderValue] = useState('60');
  const history = useHistory();
  const theme = createTheme({
    palette: {
      primary: { main: '#FFA500' },
      ßsecondary: {
        main: '#FFA500',
      },
    },
  });
  return (
    <>
      <div className='header'>
        <Logo />
      </div>
      <img src={menuSemiBg} alt='semiBg' className='semiBg' />
      <div className='body'>
        <div className='restaurantSearchBar'>
          <span className='restaurantsInfo'>Delivery ASAP</span>
          <div className='restaurantSearch'>
            <SearchBar searchValue={searchKey} from='restaurant' />
          </div>
          <div className='restaurantLocation' from='restaurant'>
            <LocationSetter locationValue={location} />
          </div>
          <img className='restaurantDateTimeButton' alt='schedule-button' src={dateTime} />
        </div>
        <div className='restaurantLocators'>
          <div className='restaurantLocatorInfo'>Home UAE Explore Great Breakfasts</div>
        </div>
        <div className='restaurantHalfBg'>
          <div className='heading'>Breakfast in Dubai</div>
          <div className='filterOption'>
            <div className='resListBy'>
              <span className='listBy'>List by :</span>
              <span className='listByOption'>All</span>
            </div>
            <div className='resSortBy'>
              <span className='sortBy'>Sort by :</span>
              <span className='sortByOption'>
                Rating
                <img src={downArrow} alt='downArrow' />
              </span>
            </div>
          </div>
          <div className='restaurantBody'>
            <div className='filterBox'>
              <div className='filterHeading'>Filters</div>
              <div
                className='resetAll'
                onClick={() => {
                  setDeliveryTimeValue('30');
                  setAveregaeMealCostValue('30');
                  setMinimumOrderValue('60');
                }}
                role='button'
                onKeyDown={null}
              >
                Reset All
              </div>
              <div className='filterUnderLine' />
              <div className='timeAndAverageMealCost'>
                <div className='timeInfo'>TIME & AVEREAGE MEAL COST</div>
                {!TimeSortHide ? (
                  <img
                    className='timeShowButton'
                    src={showButton}
                    alt='timeextendhideButton'
                    onClick={() => {
                      setTimeSortHide(true);
                    }}
                    onKeyDown={null}
                  />
                ) : (
                  <img
                    className='timeHideButton'
                    src={hideButton}
                    alt='timeextendhideButton'
                    onClick={() => {
                      setTimeSortHide(false);
                    }}
                    onKeyDown={null}
                  />
                )}
              </div>
              <div className={!TimeSortHide ? 'timeSortUnderLine1' : 'timeSortUnderLine2'} />
              <div className={TimeSortHide ? 'timeSortInfo' : 'revTimeSortInfo'}>
                <div className='status'>
                  <span className='statusLabel'>Show restaurant with</span>
                  <div className='statusButton'>
                    <img src={checkBox} className='statusButtonImg' alt='statusbuttonImg' />
                    <span className='statusButtonLabel'>Open Now</span>
                  </div>
                </div>
                <div className='deliveryTime'>
                  <div className='deliverTimeLabel'>Delivery in</div>
                  <div className='deliveryTimeFilter'>
                    <MuiThemeProvider theme={theme}>
                      <FormControl component='fieldset'>
                        <RadioGroup
                          aria-label='minutes'
                          name='minutes1'
                          value={deliveryTimevalue}
                          onChange={(e) => {
                            return setDeliveryTimeValue(e.target.value);
                          }}
                          className='timeRadioButtons'
                        >
                          <FormControlLabel
                            value='30'
                            control={<Radio color='primary' />}
                            label='30 min'
                            className={deliveryTimevalue === '30' ? 'selected' : 'disSelected'}
                          />
                          <FormControlLabel
                            value='45'
                            control={<Radio color='primary' />}
                            label='45 min'
                            className={deliveryTimevalue === '45' ? 'selected' : 'disSelected'}
                          />
                          <FormControlLabel
                            value='60'
                            control={<Radio color='primary' />}
                            label='60 min'
                            className={deliveryTimevalue === '60' ? 'selected' : 'disSelected'}
                          />
                        </RadioGroup>
                      </FormControl>
                    </MuiThemeProvider>
                  </div>
                </div>
                <div className='averageMealCost'>
                  <div className='averageMealCostLabel'>Average Meal Cost</div>
                  <div className='avereageMealCostFiltter'>
                    <MuiThemeProvider theme={theme}>
                      <FormControl component='fieldset'>
                        <RadioGroup
                          aria-label='AED'
                          name='AED1'
                          value={averageMealCostValue}
                          onChange={(e) => {
                            return setAveregaeMealCostValue(e.target.value);
                          }}
                          className='timeRadioButtons'
                        >
                          <FormControlLabel
                            value='30'
                            control={<Radio color='primary' />}
                            label='Upto 30 AED'
                            className={averageMealCostValue === '30' ? 'selected' : 'disSelected'}
                          />
                          <FormControlLabel
                            value='60'
                            control={<Radio color='primary' />}
                            label='Upto 60 AED'
                            className={averageMealCostValue === '60' ? 'selected' : 'disSelected'}
                          />
                          <FormControlLabel
                            value='100'
                            control={<Radio color='primary' />}
                            label='Upto 100 AED'
                            className={averageMealCostValue === '100' ? 'selected' : 'disSelected'}
                          />
                        </RadioGroup>
                      </FormControl>
                    </MuiThemeProvider>
                  </div>
                </div>
                <div className='minimumOrder'>
                  <div className='minimumOrderLabel'>Minimum order</div>
                  <div className='minimumOrderFilter'>
                    <MuiThemeProvider theme={theme}>
                      <FormControl component='fieldset'>
                        <RadioGroup
                          aria-label='minimum'
                          name='minimum'
                          value={minimumOrderValue}
                          onChange={(e) => {
                            return setMinimumOrderValue(e.target.value);
                          }}
                          className='timeRadioButtons'
                        >
                          <FormControlLabel
                            value='60'
                            control={<Radio color='primary' />}
                            label='Upto 60 AED'
                            className={minimumOrderValue === '60' ? 'selected' : 'disSelected'}
                          />
                          <FormControlLabel
                            value='100'
                            control={<Radio color='primary' />}
                            label='Upto 100 AED'
                            className={minimumOrderValue === '100' ? 'selected' : 'disSelected'}
                          />
                        </RadioGroup>
                      </FormControl>
                    </MuiThemeProvider>
                  </div>
                </div>
              </div>
              <div className='cuisines'>
                <div className='cuisinesLabel'>CUISINES</div>
                {!MinimumOrderHide ? (
                  <img
                    className='cuisinesShowButton'
                    src={showButton}
                    alt='timeextendhideButton'
                    onClick={() => {
                      setMinimumOrderHide(true);
                    }}
                    onKeyDown={null}
                  />
                ) : (
                  <img
                    className='cuisinesHideButton'
                    src={hideButton}
                    alt='timeextendhideButton'
                    onClick={() => {
                      setMinimumOrderHide(false);
                    }}
                    onKeyDown={null}
                  />
                )}
              </div>
              {MinimumOrderHide ? <div className='cuisinesInfo' /> : null}
              <div className='cuisinesSortUnderLine' />
              <div className='applyButtonBox'>
                <span className='applyButtonLabel'>APPLY</span>
              </div>
            </div>
            {data.map((res) => {
              return (
                <>
                  <div key={res.name} className='resBox'>
                    <div className='resName'>{res.name}</div>
                    <img alt='items' className='resImage' src={res.image} />
                    <div className='resLocation'>{res.location}</div>
                    <div className='resUnderline' />
                    <div className='resItem'>{res.item}</div>
                    <div className='resStatus'>{res.status}</div>
                    <div className='resDetails'>
                      {res.delivery_time}
                      {res.openedtill}
                      {res.mealcost}
                    </div>
                    <div className='resRating'>
                      <div className='ratingInfo'>{res.ratings}</div>
                    </div>

                    <img
                      className='menuButton'
                      alt='menuButton'
                      src={menuButton}
                      onClick={() => {
                        history.push(`/${searchKey}/${location}/menu/${res.name}/${res.item}`);
                      }}
                      onKeyDown={null}
                    />
                  </div>
                  <br />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Restaurant;
Restaurant.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  searchKey: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
