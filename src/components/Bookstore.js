/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import '../css/main.css';
import { deleteAction } from '../redux/books/books';
import AddForm from './AddForm';

function Book() {
  const dispatch = useDispatch();
  const removeItem = (e) => {
    dispatch(deleteAction(e.target.id));
  };
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <>
      {books.map((book) => (
        <>
          <div className="bookContainer">
            <div className="bookInfo">
              <ul className="controls">
                <p>Action</p>
                <li><h1>{book.title}</h1></li>
                <li><h2>{book.author}</h2></li>
                <li>
                  <a href="#">Comments</a>
                  <a href="#" id={book.id} onClick={removeItem}>
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
      ))}
      <AddForm />
    </>
  );
}
export default Book;
