import React from 'react';
import { useParams } from 'react-router-dom';
import MenuHalfCompo from '../menuSemiCompo';

const Gallery = () => {
  const { searchKey } = useParams();
  const { location } = useParams();
  const { restaurant } = useParams();
  const { item } = useParams();
  return (
    <>
      <MenuHalfCompo
        searchKey={searchKey}
        location={location}
        restaurant={restaurant}
        item={item}
        from='gallery'
      />
      <div className='menuCommomBg'>
        <div className='overViewBody'>
          <div className='galleryFilterButton'>
            <span className='allPhotos'>All Photos</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
