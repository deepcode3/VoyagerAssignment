/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cancelButton from '../../Assets/Icons/cancel.png';
import item1 from '../../Assets/Images/item1.png';
import item2 from '../../Assets/Images/item2.jpeg';
import item3 from '../../Assets/Images/item3.jpeg';
import item4 from '../../Assets/Images/item4.jpeg';
import item5 from '../../Assets/Images/item5.jpeg';
import item6 from '../../Assets/Images/item6.jpeg';

const galleryData = [
  { img: item1, name: 'Chicken Leg Fry' },
  { img: item2, name: 'Chicken Leg Fry' },
  { img: item3, name: 'Chicken Leg Fry' },
  { img: item4, name: 'Chicken Leg Fry' },
  { img: item5, name: 'Chicken Leg Fry' },
  { img: item6, name: 'Chicken Leg Fry' },
];

const Gallary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [img, setImg] = useState('');
  const [imgIndex, setIndex] = useState(null);

  const galleryDisplay = () => {
    // eslint-disable-next-line no-plusplus
    return galleryData.map((dish, index) => {
      return (
        <>
          <div className='imageContainer' key={index.toString()}>
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
    <Div>
      <div className='middle'>
        <div className='galleryBody'>
          <div className='galleryFilterButton'>
            <span className='allPhotos'>All Photos</span>
            <div className='galleryArrow' />
          </div>
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
          <div className='galleryView1'>
            <div className='row'>{galleryDisplay()}</div>
            <br />
            <div className='row'>{galleryDisplay()}</div>
            <br />
            <div className='row'>{galleryDisplay()}</div>
            <br />
          </div>
          <div className='viewAllPhotos'>
            <span className='viewAllText'>Viewmore</span>
            <span className='viewAllArrow'>{'>'}</span>
          </div>
        </div>
      </div>
    </Div>
  );
};
export default Gallary;

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
          <span className='index'>{`${imgIndex + 1} / ${galleryData.length}`}</span>
          <div className='nextPrevBox'>
            <button
              className='prevButton'
              onClick={() => {
                setImage(galleryData[imgIndex - 1].img);
                setImgIndex(imgIndex - 1);
                setIsGalleryModalOpen(true);
              }}
              onKeyDown={null}
              type='button'
            >
              yes
            </button>
            <div className='seperateLine' />
            <button
              className='nextButton'
              onClick={() => {
                setImage(galleryData[imgIndex + 1].img);
                setImgIndex(imgIndex + 1);
                setIsGalleryModalOpen(true);
              }}
              onKeyDown={null}
              type='button'
            >
              yes
            </button>
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
  left: 45px;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  justify-cointent: center;
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
    position: fixed;
    left: -150px;
  }
  .cancelButton {
    height: 20px;
    width: 20px;
  }
  .modalImage {
    height: 600px;
    width: 1110px;
    position: relative;
    left: 43px;
    margin-left: auto;
    margin-right: auto;
  }
  .nextPrevButton {
    width: 160px;
    height: 60px;
    position: relative;
    left: -100px;
    top: 600px;
    display: flex;
    flex-direction: row;
  }
  .index {
    height: 24px;
    width: 38px;
    color: #d6d3d3;
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 20px;
    left: -100px;
  }
  .nextPrevBox {
    height: 57px;
    width: 111px;
    border-radius: 9px;
    background-color: #ffffff;
    box-shadow: 1px 2px 11px 0 rgba(198, 188, 188, 0.17);
    display: flex;
    flex-direction: row;
  }
  .seperateLine {
    box-sizing: border-box;
    height: 57px;
    width: 3px;
    border: 1px solid #979797;
    opacity: 0.29;
    position: relative;
    left: 40px;
  }
  .prevButton {
    display: block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #3e3e3e;
    border-left: 2px solid #3e3e3e;
    transform: rotate(-45deg);
    position: relative;
    left: 25px;
    top: 20px;
    cursor: pointer;
  }
  .nextButton {
    display: block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #3e3e3e;
    border-left: 2px solid #3e3e3e;
    transform: rotate(135deg);
    position: relative;
    left: 55px;
    top: 20px;
    cursor: pointer;
  }
  .footerDivReview {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    display: block;
    top: 45vh;
  }
  .footerDivGallery {
    top: 80vh;
    position: relative;
  }
  .footerDivOverview {
    position: relative;
    top: 80vh;
  }
`;

const Div = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  display: flex;
  padding: 75px 0;
  align-items: center;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  background-color: #f1f3fb;
  @media screen and (max-width: 1000px) {
    height: 80vh;
  }
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
  @media screen and (max-width: 500px) {
    height: 60vh;
  }
  .middle {
    width: 1000px;
    height: 636px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    overflow-y: scroll;
    position: relative;
    @media screen and (max-width: 1000px) {
      width: 720px;
    }
    @media screen and (max-width: 768px) {
      width: 450px;
    }
    @media screen and (max-width: 500px) {
      width: 80%;
      position: relative;
      padding: 0;
    }
  }

  .galleryBody {
    max-height: 100%;
    width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 00px;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px) {
    }
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 500px) {
      width: 80%;
      position: relative;
      padding: 0;
    }
  }
  .galleryFilterButton {
    height: 38px;
    width: 200px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
    position: absolute;
    left: 50%;
    top: 10px;
    @media screen and (max-width: 1000px) {
    }
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 500px) {
    }
  }
  .allPhotos {
    height: 19px;
    width: fit-content;
    color: #4a4a4a;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1px;
    line-height: 19px;
    position: relative;
    left: 20px;
    top: 10px;
    @media screen and (max-width: 1000px) {
    }
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 500px) {
      left: 0px;
    }
  }
  .galleryArrow {
    border: 6px solid #f5a623;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    position: relative;
    top: -15px;
    left: 65px;
    cursor: pointer;
    position: relative;
    top: 5px;
    left: 30px;
    cursor: pointer;
  }
  .galleryView {
    width: 650px;
    height: 600px;
    position: relative;
    top: 70px;
    left: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1000px) {
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  .galleryView1 {
    display: none;
    @media screen and (max-width: 768px) {
      width: 390px;
      height: 500px;
      position: relative;
      top: 50px;
      left: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (max-width: 500px) {
      left: 0px;
    }
  }
  .imageContainer {
    height: 131px;
    width: 140px;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 110px;
    }
    @media screen and (max-width: 500px) {
      height: 100px;
      width: 100px;
      padding: 4%;
    }
  }
  .galleryImage {
    height: 131px;
    width: 140px;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
      height: 110px;
      width: 110px;
    }
    @media screen and (max-width: 500px) {
      height: 90px;
      width: 90px;
    }
  }
  .row {
    display: flex;
    flex-direction: column;
  }
  .viewAllPhotos {
    width: fit-content;
    position: relative;
    left: -23vw;
    top: 65vh;
  }
  .viewAllText {
    position: relative;
    top: 100px;
    left: 10px;
    height: 22px;
    width: fit-content;
    background: -webkit-linear-gradient(138.33deg, #feb456 0%, #ee4e78 100%);
    -webkit-background-clip: text;
    background-clip: none;
    -webkit-text-fill-color: transparent;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.17px;
    line-height: 22px;
    cursor: pointer;
  }
  .viewAllArrow {
    height: 22px;
    width: 93px;
    position: relative;
    top: 100px;
    left: 20px;
    background: -webkit-linear-gradient(138.33deg, #feb456 0%, #ee4e78 100%);
    -webkit-background-clip: text;
    background-clip: none;
    -webkit-text-fill-color: transparent;
  }
`;
