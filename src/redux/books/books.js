import { v4 as uid } from 'uuid';

const ADD_BOOK = 'REACT-BOOKSTORE/src/redux/books/ADD_BOOK';
const DELETE_BOOK = 'REACT-BOOKSTORE/src/redux/books/DELETE_BOOK';
const initialState = [
  {
    id: uid(),
    title: 'Great Wall',
    author: 'Han Shem',
  },
  {
    id: uid(),
    title: 'The Planet',
    author: 'George Well',
  },
];
export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case DELETE_BOOK:
      return state.filter((remove) => remove.id !== action.index);
    default:
      return state;
  }
};

// action creator
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const deleteAction = (index) => ({
  type: DELETE_BOOK,
  index,
});
