/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuHalfCompo from '../MenuSemiCompo/index';
import cancelButton from '../../Assets/Icons/cancel.png';
import item1 from '../../Assets/Images/item1.png';
import item2 from '../../Assets/Images/item2.jpeg';
import item3 from '../../Assets/Images/item3.jpeg';
import item4 from '../../Assets/Images/item4.jpeg';
import item5 from '../../Assets/Images/item5.jpeg';
import item6 from '../../Assets/Images/item6.jpeg';
import './MenuNav.css';
import Footer from '../Footer';

const galleryData = [
  { img: item1, name: 'Chicken Leg Fry' },
  { img: item2, name: 'Chicken Leg Fry' },
  { img: item3, name: 'Chicken Leg Fry' },
  { img: item4, name: 'Chicken Leg Fry' },
  { img: item5, name: 'Chicken Leg Fry' },
  { img: item6, name: 'Chicken Leg Fry' },
];
const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [img, setImg] = useState();
  const [imgIndex, setIndex] = useState();
  const { searchKey } = useParams();
  const { location } = useParams();
  const { restaurant } = useParams();
  const { item } = useParams();

  const galleryDisplay = () => {
    // eslint-disable-next-line no-plusplus
    return galleryData.map((dish, index) => {
      return (
        <>
          <div className='imageContainer' key={index}>
            <img
              src={dish.img}
              alt=''
              className='galleryImage'
              onClick={() => {
                setIsModalOpen(true);
                setImg(dish.img);
                setIndex(index);
              }}
              onKeyDown={null}
            />
          </div>
          <GalleryModal
            isGalleryModalOpen={isModalOpen}
            setIsGalleryModalOpen={setIsModalOpen}
            img={img}
            imgIndex={imgIndex}
            setImage={setImg}
            setImgIndex={setIndex}
          />
        </>
      );
    });
  };
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
        <div className='galleryBody'>
          <div className='galleryFilterButton'>
            <span className='allPhotos'>All Photos</span>
            <div className='galleryArrow' />
            <div className='galleryView'>
              <div className='row'>{galleryDisplay()}</div>
              <br />
              <div className='row'>{galleryDisplay()}</div>
              <br />
              <div className='row'>{galleryDisplay()}</div>
              <br />
              <div className='row'>{galleryDisplay()}</div>
              <br />
            </div>
            <span className='viewAllText'>View more</span>
            <span className='viewAllArrow'>{'>'}</span>
          </div>
        </div>
      </div>
      <div className='footerDivGallery'>
        <Footer />
      </div>
    </>
  );
};
export default Gallery;

Modal.setAppElement('#root');
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line object-curly-newline
const GalleryModal = ({
  isGalleryModalOpen,
  setIsGalleryModalOpen,
  img,
  imgIndex,
  setImage,
  setImgIndex,
}) => {
  return (
    <Modal
      className='wrapper'
      isOpen={isGalleryModalOpen}
      onRequestClose={() => {
        setIsGalleryModalOpen(false);
      }}
      style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.04)', zIndex: 1 } }}
    >
      <Wrapper>
        <img
          src={cancelButton}
          alt=''
          className='cancelButton'
          onClick={() => {
            setIsGalleryModalOpen(false);
          }}
          onKeyDown={null}
        />
        <img src={img} alt='' className='modalImage' />
        <div className='nextPrevButton'>
          <span className='index'>
            {imgIndex + 1}/{galleryData.length}
          </span>
          <div className='nextPrevBox'>
            <div
              className='prevButton'
              onClick={() => {
                setImage(galleryData[imgIndex - 1].img);
                setImgIndex(imgIndex - 1);
                setIsGalleryModalOpen(true);
              }}
              onKeyDown={null}
              role='button'
            />
            <div className='seperateLine' />
            <div
              className='nextButton'
              onClick={() => {
                setImage(galleryData[imgIndex + 1].img);
                setImgIndex(imgIndex + 1);
                setIsGalleryModalOpen(true);
              }}
              onKeyDown={null}
              role='button'
            />
          </div>
        </div>
      </Wrapper>
    </Modal>
  );
};
GalleryModal.propTypes = {
  isGalleryModalOpen: PropTypes.bool.isRequired,
  setIsGalleryModalOpen: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  imgIndex: PropTypes.number.isRequired,
  setImage: PropTypes.func.isRequired,
  setImgIndex: PropTypes.func.isRequired,
};
const Wrapper = styled.div`
  height: 588px;
  width: 1120px;
  border-radius: 8px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
