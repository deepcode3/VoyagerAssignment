import React from 'react';
import { useParams } from 'react-router-dom';
import Restaurant from '../../Containers/Restaurants';
import data from './data';

const RestaurantData = () => {
  const { searchKey } = useParams();
  const { location } = useParams();

  console.log(location, searchKey);
  return <Restaurant data={data} searchKey={searchKey} location={location} />;
};

export default RestaurantData;
