/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

function Footer({
  left, filters, clearCompleted, parametr,
}) {
  let classNameALL = '';
  let classNameActive = '';
  let classNameCompleted = '';
  if (parametr === 'ALL') {
    classNameALL = 'selected';
  }
  if (parametr === 'Active') {
    classNameActive = 'selected';
  }
  if (parametr === 'Completed') {
    classNameCompleted = 'selected';
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        {left}
        {' '}
        items left
      </span>
      <ul className="filters">
        <li>
          <button
            type="button"
            className={classNameALL}
            onClick={() => {
              filters('ALL');
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={classNameActive}
            onClick={() => {
              filters('Active');
            }}
          >
            Active
          </button>
        </li>

        <li>
          <button
            type="button"
            className={classNameCompleted}
            onClick={() => {
              filters('Completed');
            }}
          >
            Completed
          </button>
        </li>
      </ul>

      <button
        type="button"
        onClick={clearCompleted}
        className="clear-completed"
      >
        Clear completed

      </button>
    </footer>
  );
}

export default Footer;
