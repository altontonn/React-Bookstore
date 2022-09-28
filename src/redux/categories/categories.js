const CHECKER = 'REACT-BOOKSTORE/src/redux/books/CHECKER';
const initialState = [];

export const checkReducer = (state = initialState, action) => (
  action.type === CHECKER ? action.text : state
);

export const checkAction = () => ({
  type: CHECKER,
  text: 'Under Development',
});
