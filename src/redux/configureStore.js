import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books/books';
import { checkReducer } from './categories/categories';

const mainReducer = combineReducers({
  books: booksReducer,
  checks: checkReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
