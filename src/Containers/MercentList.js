import React from 'react';
import PropTypes from 'prop-types';
import { BsCircle } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';
import '../Styles/Main.css';

const MercentList = ({ Data, search }) => {
  console.log('mercentlist', Data.Data);

  return (
    <>
      <ul className='tableul'>
        <li>STATUS</li>
        <li>MID</li>
        <li>MERCENT NAME</li>
        <li>#BRANDS</li>
        <li>#OUTLET</li>
        <li>COUNTRY</li>
        <li>Edit</li>
      </ul>
      {
        /* eslint-disable  consistent-return,array-callback-return,no-else-return  */
        Data.filter((val) => {
          if (search === '') {
            return val;
          } else if (val.status.toLowerCase() === search.toLowerCase()) {
            return val;
          } else if (val.mid.toLowerCase() === search.toLowerCase()) {
            return val;
          } else if (val.country.toLowerCase() === search.toLowerCase()) {
            return val;
          } else if (val.mercentname.toLowerCase() === search.toLowerCase()) {
            return val;
          } else if (
            val.country.toLowerCase() ||
            val.mid.toLowerCase() ||
            val.status.toLowerCase() !== search.toLowerCase()
          ) {
            return null; // console.log('no results found', search, !val)
          } else {
            return '';
          }
        }).map((data, i) => {
          console.log('data', i.toString());
          return (
            <ul
              className='tableullist'
              key={data.id}
              style={
                i.toString() % 2 === 0
                  ? { backgroundColor: 'rgb(223, 216, 202)' }
                  : { backgroundColor: 'rgb(242, 241, 241)' }
              }
            >
              <li>
                <BsCircle className={data.a === false ? 'circleRed' : 'circleGreen'} />
                {data.status}
              </li>
              <li>{data.mid}</li>
              <li>{data.mercentname}</li>
              <li>{data.brands}</li>
              <li>{data.outlet}</li>
              <li>{data.country}</li>
              <li>
                <MdModeEditOutline />
              </li>
            </ul>
          );
        })
      }
    </>
  );
};
export default MercentList;

MercentList.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
};
