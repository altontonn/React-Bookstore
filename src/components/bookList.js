import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayBooks } from '../redux/books/books';
import AddForm from './AddForm';
import Book from './Bookstore';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayBooks());
  }, [books, dispatch]);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.item_id}
          index={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddForm />
    </>
  );
}
export default BookList;
