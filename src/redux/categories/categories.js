const CHECKER = 'CHECKER';

export const checkAction = () => ({
  type: CHECKER,
});

export const checkReducer = (state = '', action) => {
  switch (action.type) {
    case CHECKER:
      return 'Under Development';
    default:
      return state;
  }
};
