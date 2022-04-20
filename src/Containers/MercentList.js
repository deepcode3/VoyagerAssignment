import React from 'react';
import '../Styles/Main.css';
import PropTypes from 'prop-types';
import { BsCircle } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';

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
      {Data.filter((val) => {
        return search === ''
          ? val
          : val.status.toLowerCase() === search.toLowerCase()
          ? val
          : val.mid.toLowerCase() === search.toLowerCase()
          ? val
          : val.country.toLowerCase() === search.toLowerCase()
          ? val
          : val.mercentname.toLowerCase() === search.toLowerCase()
          ? val
          : val.country.toLowerCase() ||
            val.mid.toLowerCase() ||
            val.status.toLowerCase() !== search.toLowerCase()
          ? null // console.log('no results found', search, !val)
          : '';
      }).map((data) => {
        // console.log('data', data);
        return (
          <ul
            className='tableullist'
            key={data.id}
            style={
              data.id % 2 === 0
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
      })}
    </>
  );
};
export default MercentList;

MercentList.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
};
