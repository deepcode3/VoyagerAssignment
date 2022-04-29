import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiFilter } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import './Styles/Main.css';
import Routing from './Routing/Routing';
import Data from './Containers/table.json';

const App = () => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className='mainDiv'>
      <div className='Headder'>
        <span className='nav'>Store Setup</span>
      </div>
      <div className='Body'>
        <span className='bread'>{'Store setup > Outlet Management'}</span>
        <div className='LinkMainDiv'>
          <ul className='Linkul'>
            <li>
              <NavLink exact to='/' className='link' activeClassName='activelink'>
                Mercent
              </NavLink>
            </li>
            <li>
              <NavLink to='/Brand' className='link' activeClassName='activelink'>
                Brand
              </NavLink>
            </li>
            <li>
              <NavLink to='/Outlet' className='link' activeClassName='activelink'>
                Outlet
              </NavLink>
            </li>
          </ul>
          <button type='button' className='newMercent'>
            Add new Mercent +
          </button>
        </div>
        <div className='buttonDiv'>
          <div className='leftSide'>
            <form className='searchBar'>
              <AiOutlineSearch style={{ pading: '0 10px' }} />
              <input placeholder='Search' type='text' onChange={(e) => setValue(e.target.value)} />
            </form>
            <button type='button' className='searchButton' onClick={() => setSearch(value)}>
              Search
            </button>
          </div>
          <div className='rightSide'>
            <button type='button' className='clearFilter'>
              Clear All Filters
            </button>
            <button type='button' className='Filter'>
              Filter
              <BiFilter style={{ marginLeft: '3px' }} />
            </button>
          </div>
        </div>
        <Routing Data={Data} search={search} />
      </div>
    </div>
  );
};
export default App;
