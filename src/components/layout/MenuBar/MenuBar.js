import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children, categories }) => {
  let history = useHistory();
  const [activeBar, setActiveBar] = useState('');


  const handleActiveClass = (e, id) => {
    e.preventDefault();
    setActiveBar(id);
    id ? history.push(`/shop/${id}`) : history.push('/');
  };

  return (
    <div className={styles.root}>
      <div className={'container ' + styles.normalMenu}>
        <div className='row align-items-center'>
          <div className={'col ' + styles.search}>
            <ProductSearch />
          </div>
          <div className={'col-auto ' + styles.menu}>
            <ul>
              <li>
                <a href='/' className={!activeBar ? styles.active : ''}
                  onClick={(e, id) => handleActiveClass(e, id)}
                >
                Home
                </a>
              </li>
              {categories.map(item => {
                return (
                  <li key={item.id}>
                    <a href='/'
                      className={activeBar === item.id ? styles.active : ''}
                      onClick={e => handleActiveClass(e, item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.dropdownMenu}>
        <div className={styles.search}>
          <ProductSearch />
        </div>
        <div className={styles.droplistMenu}>
          <ul className={styles.dropMenu}>
            <li className={styles.dropFirst}>
              <a className={styles.menuLink} href='/#'>
              Menu
              </a>
              <ul className={styles.dropdown}>
                <li>
                  <a href='/#'>Home</a>
                </li>
                <li>
                  <a href='/#'>Furniture</a>
                </li>
                <li>
                  <a href='/#'>Chair</a>
                </li>
                <li>
                  <a href='/#'>Table</a>
                </li>
                <li>
                  <a href='/#'>Sofa</a>
                </li>
                <li>
                  <a href='/#'>Bedroom</a>
                </li>
                <li>
                  <a href='/#'>Blog</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
};

export default MenuBar;
