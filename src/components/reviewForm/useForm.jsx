import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  reviews: "",
  rating: 0,
};
const SET_NAME_ACTION_TYPE = "setName";
const SET_REVIEW_ACTION_TYPE = "setReview";
const INCREMENT_SET_RETING_ACTION_TYPE = "incrementRating";
const DECREMENT_SET_RETING_ACTION_TYPE = "decrementRating";
const DO_CLEAN_FORM_ACTION_TYPE = "doCleanForm";

const MAX_RATING_VALUE = 5;
const MIN_RATING_VALUE = 1;

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION_TYPE:
      return {
        ...state,
        name: payload,
      };
    case SET_REVIEW_ACTION_TYPE:
      return {
        ...state,
        reviews: payload,
      };
    case INCREMENT_SET_RETING_ACTION_TYPE:
      if (state.rating < MAX_RATING_VALUE) {
        return { rating: state.rating + 1 };
      } else {
        return state;
      }
    case DECREMENT_SET_RETING_ACTION_TYPE:
      if (state.rating > MIN_RATING_VALUE) {
        return { rating: state.rating - 1 };
      } else {
        return state;
      }
    case DO_CLEAN_FORM_ACTION_TYPE:
      return { ...DEFAULT_FORM_VALUE };
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  const { name, reviews, rating } = form;

  const setName = (value) => {
    dispatch({ type: SET_NAME_ACTION_TYPE, payload: value });
  };
  const setReview = (value) => {
    dispatch({ type: SET_REVIEW_ACTION_TYPE, payload: value });
  };
  const incrementRating = (value) => {
    dispatch({ type: INCREMENT_SET_RETING_ACTION_TYPE, payload: value });
  };
  const decrementRating = (value) => {
    dispatch({ type: DECREMENT_SET_RETING_ACTION_TYPE, payload: value });
  };
  const doCleanForm = (value) => {
    dispatch({ type: DO_CLEAN_FORM_ACTION_TYPE, payload: value });
  };

  return {
    name,
    reviews,
    rating,
    setName,
    setReview,
    incrementRating,
    decrementRating,
    doCleanForm,
  };
};
