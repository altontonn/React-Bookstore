const ADD_BOOK = 'ADD_BOOK';
export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    default:
      return state;
  }
};

// action creator
export const addAction = () => ({
  type: ADD_BOOK,
});
