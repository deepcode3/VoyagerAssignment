import React from 'react';
import { useParams } from 'react-router-dom';
import MenuHalfCompo from '../menuSemiCompo';

const OverView = () => {
  const { searchKey } = useParams();
  const { location } = useParams();
  const { restaurant } = useParams();
  const { item } = useParams();
  return (
    <MenuHalfCompo
      searchKey={searchKey}
      location={location}
      restaurant={restaurant}
      item={item}
      from='overview'
    />
  );
};
export default OverView;
