import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'REACT-BOOKSTORE/src/redux/books/ADD_BOOK';
const DELETE_BOOK = 'REACT-BOOKSTORE/src/redux/books/DELETE_BOOK';
const DISPLAY_BOOK = 'REACT-BOOKSTORE/src/redux/books/DISPLAY_BOOK';
const BOOK_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WP01qHhkkMGlOBwrMVPC/books';
const initialState = [];
export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case `${DELETE_BOOK}/fulfilled`:
      return state.filter((remove) => remove.id !== action.index);
    case `${DISPLAY_BOOK}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

// action creator
export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(BOOK_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return book;
});

// removing a book
export const deleteAction = createAsyncThunk(DELETE_BOOK, async (id) => {
  await fetch(
    `${BOOK_URL}/${id}`,
    {
      method: 'DELETE',
    },
  );
  return id;
});

// display book
export const displayBooks = createAsyncThunk(DISPLAY_BOOK, async () => {
  const response = await fetch(BOOK_URL);
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return books;
});
