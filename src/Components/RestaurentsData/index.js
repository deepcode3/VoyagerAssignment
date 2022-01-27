/* eslint-disable react/jsx-wrap-multilines */
import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import data from './Data/data.json';

const Restaurant = lazy(() => {
  return import('../../Containers/Restaurants');
});

const RestaurantData = () => {
  const { searchKey } = useParams();
  const { location } = useParams();

  console.log(location, searchKey);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Restaurant data={data.restaurants} searchKey={searchKey} location={location} />
    </Suspense>
  );
};

export default RestaurantData;
