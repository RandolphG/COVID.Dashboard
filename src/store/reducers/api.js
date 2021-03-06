import { createReducer } from '@reduxjs/toolkit';

import {
  INIT_COUNTRIES_SUCCESS,
  INIT_NUMBER_OF_COUNTRIES_SUCCESS,
  TOGGLE_MODAL,
  NEXT,
  SET_OFFSET,
  PREV,
  INITIALIZE_DATA,
  INIT_COUNTRIES_FAILURE,
  INIT_FLAGS_FAILURE,
  INIT_FLAGS_SUCCESS,
  INIT_NUMBER_OF_COUNTRIES_FAILURE,
} from '../actions';

const initialState = {
  cachedCountries: false,
  cachedFlags: false,
  countries: [],
  flags: [],
  loading: false,
  error: null,
  numberOfCountries: null,
  slideIndex: 0,
  Expiration: '',
  isDataExpired: false,
  offset: 0,
  showModal: false,
};

export const api = createReducer(initialState, {
  [NEXT]: (state, action) => ({
    ...state,
    slideIndex: action.payload,
  }),
  [SET_OFFSET]: (state, action) => ({
    ...state,
    offset: action.payload,
  }),
  [PREV]: (state, action) => ({
    ...state,
    slideIndex: action.payload,
  }),
  [TOGGLE_MODAL]: (state, action) => ({
    ...state,
    showModal: action.payload,
  }),
  [INITIALIZE_DATA]: state => ({
    ...state,
    loading: true,
    error: null,
  }),
  [INIT_NUMBER_OF_COUNTRIES_SUCCESS]: (state, action) => ({
    ...state,
    numberOfCountries: action.payload,
  }),
  [INIT_NUMBER_OF_COUNTRIES_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload.error,
    numberOfCountries: null,
  }),
  [INIT_COUNTRIES_SUCCESS]: (state, action) => ({
    ...state,
    countries: action.payload,
  }),
  [INIT_COUNTRIES_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
    countries: [],
  }),
  [INIT_FLAGS_SUCCESS]: (state, action) => ({
    ...state,
    flags: action.payload,
  }),
  [INIT_FLAGS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
    flags: [],
  }),
});
