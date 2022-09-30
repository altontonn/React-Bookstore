import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { booksReducer } from './books/books';
import { checkReducer } from './categories/categories';

const mainReducer = combineReducers({
  books: booksReducer,
  checks: checkReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
