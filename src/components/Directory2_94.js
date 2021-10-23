import React, { useState, useEffect } from 'react';
import './Directory_94.scss';
//import items from './menu-items-data_94';
import axios from 'axios';
import MenuItem_94 from './MenuItem_94';

const Directory2_94 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL =
        'https://heroku-crown94.herokuapp.com/api_94/category_94';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api/category_94', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_94
              key={id}
              name={name}
              remote_url={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory2_94;
