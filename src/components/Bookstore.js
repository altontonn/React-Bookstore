/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/main.css';
import { deleteAction } from '../redux/books/books';

function Book(props) {
  const { index, title, author } = props;
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(deleteAction(index));
  };
  return (
    <>
      <div className="bookContainer">
        <div className="bookInfo">
          <ul className="controls">
            <p>Action</p>
            <li>
              <h1>{title}</h1>
            </li>
            <li>
              <h2>{author}</h2>
            </li>
            <li>
              <a href="#">Comments</a>
              <a href="#" onClick={removeItem}>
                Remove
              </a>
              <a href="#">Edit</a>
            </li>
          </ul>
          <div className="progress">
            <div className="progress-amount">
              <div className="percentage">80%</div>
              <div className="status">Completed</div>
            </div>
          </div>
          <div className="progress-details">
            <div className="name">CURRENT CHAPTER</div>
            <div className="current-chapter">Chapter 20</div>
            <button type="button">Update progress</button>
          </div>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
