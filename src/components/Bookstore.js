import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="bookContainer">
      <div className="bookInfo">
        <p>Action</p>
        <h1 className="title">{title}</h1>
        <h2 className="author">{author}</h2>
        <ul className="controls">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>

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
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
