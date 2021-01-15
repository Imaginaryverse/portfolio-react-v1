import ActionTypes from './Actions';

const Reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
