/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent */
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
const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [img, setImg] = useState('');
  const [imgIndex, setIndex] = useState(null);

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
    <GalleryBody>
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
      <div className='viewAllPhotos'>
        <span className='viewAllText'>Viewmore</span>
        <span className='viewAllArrow'>{'>'}</span>
      </div>
    </GalleryBody>
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
  left: 45px;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  justify-cointent: center;
  .cancelButton {
    height: 20px;
    width: 20px;
    position: relative;
    top: -40px;
    left: 1030px;
    cursor: pointer;
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
    position: relative;
    top: 20px;
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

  @media all and (max-width: 1040px) {
    .modalImage {
      width: 300px;
      height: 300px;
      position: relative;
      left: 00px;
      top: 100px;
    }
    .cancelButton {
      position: relative;
      left: 640px;
      top: 60px;
    }
    .nextPrevButton {
      position: relative;
      top: 440px;
      left: -470px;
    }
    .viewAllPhotos {
      width: 100px;
      position: relative;
      left: -60px;
      top: 600px;
    }
  }
  @media all and (max-width: 720px) {
    .modalImage {
      width: 300px;
      height: 300px;
      position: relative;
      left: -180px;
      top: 100px;
    }
    .cancelButton {
      position: relative;
      left: 440px;
      top: 60px;
    }
    .nextPrevButton {
      position: relative;
      top: 440px;
      left: -650px;
    }
  }
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
    position: fixed;
    left: -150px;
  }
`;
const GalleryBody = styled.div`
  height: 850px;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  left: 00px;
  display: flex;
  flex-direction: row;
  background-color: #f1f3fb;
  .galleryFilterButton {
    height: 38px;
    width: 150px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    left: 1270px;
    top: -10px;
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
    width: 960px;
    height: 600px;
    position: relative;
    top: 70px;
    left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
  }
  .imageContainer {
    height: 131px;
    width: 140px;
    margin-left: 20px;
    margin-bottom: 20px;
    position: relative;
    left: -10px;
    top: 10px;
  }
  .galleryImage {
    height: 131px;
    width: 140px;
    border-radius: 10px;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .viewAllPhotos {
    width: 100px;
    position: relative;
    left: -400px;
    top: 600px;
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
  .modalImage {
    height: 600px;
    width: 1110px;
    position: relative;
    left: 43px;
    margin-left: auto;
    margin-right: auto;
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

  @media all and (max-width: 1920px) {
    .viewAllPhotos {
      position: relative;
      left: -500px;
    }
  }
  @media all and (max-width: 1120px) {
    .overViewBody {
      position: relative;
      left: 60px;
    }
  }
  @media all and (max-width: 1040px) {
    .descriptionText {
      height: 22px;
      width: 89px;
      color: #000000;
      font-family: 'Open Sans';
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 22px;
    }
    .overViewBody {
      height: auto;
      width: 400px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      top: 150px;
      left: -110px;
      display: flex;
      flex-direction: row;
      padding-bottom: 200px;
    }
    .descriptionParagraph {
      height: 52px;
      width: 650px;
      color: #4a4a4a;
      font-family: 'Open Sans';
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 24px;
      position: relative;
      top: 10px;
    }
    .overViewFlexBox {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 600px;
      position: relative;
      left: 00px;
    }
    .averasgeMealCost {
      position: relative;
      top: 310px;
      left: 10px;
    }
    .phone {
      position: relative;
      top: 330px;
      left: 10px;
    }
    .address {
      position: relative;
      top: 350px;
      left: 10px;
    }
    .linebetween {
      display: none;
    }
    .openingHours {
      position: relative;
      top: 900px;
      left: -160px;
    }
    .reViewBody {
      width: 300px;
      position: relative;
      left: -140px;
    }
    .reviewsHeading {
      position: relative;
      left: -10px;
    }
    .showRecent {
      position: relative;
      left: 450px;
      display: flex;
      flex-direction: row;
    }
    .reviewsSubmiter {
      display: none;
    }
    .reviewCard {
      position: relative;
      left: -35px;
    }
    .showReviewsSubmiter {
      height: 526px;
      width: 300px;
      border-radius: 6px;
      background-color: #ffffff;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      top: 200px;
      left: 13vw;
    }
    .reviewCloseButton {
      width: 25px;
      height: 25px;
      position: relative;
      top: 19.5vh;
      left: 50vw;
      display: block;
    }
    .reviewButton {
      height: 40px;
      width: 40px;
      position: relative;
      top: 8.5vh;
      left: 420px;
      cursor: pointer;
      display: block;
    }
    .hideReviewDisplayer {
      display: none;
    }
    .menuReviewContainer {
      width: 100%;
      overflow: hidden;
    }
    .submitButton {
      position: relative;
      left: 0px;
    }
    .imageAdder {
      position: relative;
      left: 180px;
    }
    .ratingLine {
      position: relative;
      left: 15px;
    }
    .ratingLine2 {
      position: relative;
      left: 15px;
    }
    .ratingLine3 {
      position: relative;
      left: 00px;
    }
    .galleryView {
      width: 500px;
      position: relative;
      left: -20px;
    }
    .galleryImage {
      height: 90px;
      width: 90px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between 10;
      position: relative;
    }
    .modalImage {
      width: 300px;
      height: 300px;
      position: relative;
      left: 00px;
      top: 100px;
    }
  }
  @media all and (max-width: 720px) {
    .descriptionParagraph {
      width: 500px;
    }
    .overViewBody {
      position: relative;
      width: 400px;
      left: -40px;
      top: 80px;
    }
    .openingHours {
      position: relative;
      top: 850px;
    }
    .cuisinesOverview {
      position: relative;
      top: 280px;
    }
    .reViewBody {
      width: 200px;
      position: relative;
      left: -120px;
    }
    .reviewCard {
      width: 460px;
      position: relative;
      left: -35px;
    }
    .showRecent {
      position: relative;
      left: 290px;
    }
    .reviewButton {
      position: relative;
      left: 250px;
    }
    .showReviewsSubmiter {
      height: 526px;
      width: 300px;
      border-radius: 6px;
      background-color: #ffffff;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      top: 200px;
      left: -5vw;
    }
    .reviewCloseButton {
      width: 25px;
      height: 25px;
      position: relative;
      top: 19.5vh;
      left: 42vw;
      display: block;
    }
    .reviewButton {
      height: 40px;
      width: 40px;
      position: relative;
      top: 8.5vh;
      left: 250px;
      cursor: pointer;
      display: block;
    }
    .hideReviewDisplayer {
      display: none;
    }
    .menuReviewContainer {
      width: 100%;
      overflow: hidden;
    }
    .likeBox {
      position: relative;
      left: 410px;
    }
    .menuReviewContainer {
      width: 100%;
      overflow: hidden;
    }
    .submitButton {
      position: relative;
      left: 0px;
    }
    .imageAdder {
      position: relative;
      left: 180px;
    }
    .ratingLine {
      position: relative;
      left: 15px;
    }
    .ratingLine2 {
      position: relative;
      left: 15px;
    }
    .ratingLine3 {
      position: relative;
      left: 00px;
    }
    .galleryView {
      width: 400px;
      position: relative;
      left: 00px;
      top: -10px;
    }
    .galleryImage {
      height: 60px;
      width: 60px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between 10;
      position: relative;
    }
  }
  @media all and (max-width: 550px) {
    .galleryBg {
      background-color: #c5cae238;
      width: 100%;
      height: fit-content;
      position: absolute;
      top: 470px;
      padding-bottom: 50vh;
      overflow: hidden;
    }

    .menuCommomBg {
      background-color: #c5cae238;
      width: 100%;
      height: fit-content;
      position: absolute;
      top: 450px;
      padding-bottom: 120%;
      overflow: hidden;
    }
    .overViewBody {
      height: auto;
      width: 300px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      top: 250px;
      left: 10px;
      display: flex;
      flex-direction: row;
      padding-bottom: 200px;
    }
    .description {
      position: relative;
      top: -7.5vh;
      left: -6vh;
    }
    .descriptionParagraph {
      width: 350px;
    }
    .overViewFlexBox {
      position: relative;
      top: -13vh;
      left: -410px;
      flex-direction: column;
      justify-content: space-between;
    }
    .cuisinesOverview {
      position: relative;
      top: 260px;
    }
    .linebetween {
      display: none;
    }
    .averasgeMealCost {
      position: relative;
      left: 6px;
      top: 33vh;
    }
    .phone {
      position: relative;
      left: 6px;
      top: 33vh;
    }
    .address {
      position: relative;
      left: 6px;
      top: 35vh;
    }
    .openingHours {
      width: 300px;
      justify-content: flex-start;
      position: relative;
      top: 80vh;
      left: -570px;
    }
    .reviewsBg {
      background-color: #c5cae238;
      width: 100%;
      height: fit-content;
      position: absolute;
      top: 450px;
      overflow: hidden;
    }
    .reViewBody {
      height: auto;
      width: 300px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      top: 40px;
      left: 0px;
      display: flex;
      flex-direction: row;
      padding-bottom: 500px;
    }
    .reviewsHeading {
      position: relative;
      top: 150px;
      left: -45px;
    }
    .reviewCard {
      width: 360px;
      position: relative;
      left: 6vw;
    }
    .cartComment {
      width: 80vw;
    }
    .likeBox {
      position: relative;
      left: 300px;
    }
    .showRecent {
      display: none;
    }
    .reviewsSubmiter {
      display: none;
    }
    .showReviewsSubmiter {
      height: 526px;
      width: 300px;
      border-radius: 6px;
      background-color: #ffffff;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      top: 200px;
      left: -22vw;
    }
    .hideReviewDisplayer {
      display: none;
    }
    .reviewCloseButton {
      width: 25px;
      height: 25px;
      position: relative;
      top: 19.5vh;
      left: 42vw;
      display: block;
    }
    .reviewButton {
      height: 40px;
      width: 40px;
      position: relative;
      top: 17.5vh;
      left: 225px;
      cursor: pointer;
      display: block;
    }
    .reviewEmptyImg {
      width: 340px;
      height: 400px;
      background-color: #000000;
    }
    .emptyReviewsText {
      height: 17px;
      width: 17px;
      color: #f67e03;
      font-family: 'Open Sans';
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 17px;
      position: relative;
      left: -87vw;
      top: 30px;
    }
    .reviewsSubmiterHeader {
      position: relative;
      left: 10px;
    }
    .reviewsSubmiterHeader2 {
      position: relative;
      left: -39vw;
    }
    .reveiwerBox {
      position: relative;
      left: 10px;
    }
    .ratingLine {
      position: relative;
      left: 10px;
    }
    .savedBox {
      position: relative;
      left: 56vw;
    }
    .reviewsSubmiterHeader3 {
      position: relative;
      left: 10px;
    }
    .reveiwerBox2 {
      position: relative;
      left: 10px;
    }
    .ratingLine2 {
      position: relative;
      left: 10px;
    }
    .ratingLine3 {
      position: relative;
      left: 20px;
    }
    .savedBox2 {
      position: relative;
      left: 56vw;
    }
    .reviewInput {
      position: relative;
      left: -10px;
    }
    .submitButton {
      position: relative;
      left: 0px;
    }
    .galleryBody {
      height: auto;
      width: 100%;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      top: 150px;
      left: -4vh;
    }
    .galleryView {
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between 5px;
      margin-left: auto;
      margin-right: auto;
      left: 80px;
      top: 00px;
    }
    .galleryImage {
      height: 50px;
      width: 60px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between 10;
    }
    .galleryFilterButton {
      display: none;
    }
    .imageContainer {
      height: 50px;
      width: 60px;
      margin-left: 5px;
      margin-bottom: 0px;
      position: relative;
      left: -10px;
      top: 5px;
    }
    .viewAllPhotos {
      position: relative;
      left: -33vw;
      width: fit-content;
      top: 440px;
    }
    .viewAllText {
      letter-spacing: 5px;
    }

    .modalImage {
      width: 70vw;
      height: 70vh;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      left: 20px;
      top: -150px;
      border-radius: 5px;
    }
    .cancelButton {
      position: relative;
      left: 370px;
      top: -200px;
    }
    .nextPrevButton {
      position: relative;
      top: 490px;
      left: -130px;
    }
    .galleryContainer {
      width: 100%;
      overflow: hidden;
    }
    .viewAllPhotos {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      top: 10vh;
    }
    .menuReviewContainer {
      width: 100%;
      overflow: hidden;
    }
  }

  @media all and (max-width: 460px) {
    .galleryBody {
      height: auto;
      width: 100%;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      top: 150px;
      left: -4vh;
    }
    .galleryView {
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between 5px;
      margin-left: auto;
      margin-right: auto;
      left: 70px;
      top: 00px;
    }
    .modalImage {
      width: 400px;
      height: 400px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      left: 50px;
      top: 70px;
      border-radius: 5px;
    }
    .nextPrevButton {
      position: relative;
      left: -100px;
    }
  }
  @media all and (max-width: 420px) {
    .overViewBody {
      position: relative;
      left: 20px;
      top: 280px;
    }
    .reViewBody {
      height: auto;
      width: 300px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      top: 40px;
      left: 15px;
      display: flex;
      flex-direction: row;
      padding-bottom: 500px;
    }
    .reviewCloseButton {
      width: 25px;
      height: 25px;
      position: relative;
      top: 18.5vh;
      left: 200px;
      display: block;
    }

    .reviewButton {
      position: relative;
      left: 210px;
    }

    .ratingLine {
      position: relative;
      left: 10px;
    }
    .ratingLine2 {
      position: relative;
      left: 10px;
    }
    .ratingLine3 {
      position: relative;
      left: 20px;
    }
    .galleryView {
      position: relative;
      left: 45px;
    }
    .modalImage {
      width: 70vw;
      height: 50vh;
      position: relative;
      left: 70px;
      top: -100px;
    }
    .cancelButton {
      position: relative;
      left: 350px;
      top: -130px;
    }
    .nextPrevButton {
      position: relative;
      left: -80px;
      top: 350px;
    }
  }
`;
