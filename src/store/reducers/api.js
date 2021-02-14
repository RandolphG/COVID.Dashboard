import { createReducer } from '@reduxjs/toolkit';

import {
  INIT_COUNTRIES,
  INIT_NUMBER_OF_COUNTRIES,
  INIT_GLOBAL_DATA,
  TOGGLE_MODAL,
  SET_SLIDE_INDEX,
  NEXT,
  SET_OFFSET,
  PREV,
  INIT_FLAGS,
  SET_CURRENT_MODE,
  SET_MODE_INDEX,
} from '../actions';
import Carousel from '../../components/Covid19/DisplayMode/Carousel';
import { Scroll } from '../../components/Covid19/Scroll';

export const MODAL_VIEWS = {
  CAROUSEL: {
    name: 'CAROUSEL',
  },
  SCROLL: {
    name: 'SCROLL',
  },
  INFO: {
    name: 'INFO',
  },
};

const initialState = {
  today: new Date(),
  countries: [],
  flags: [],
  numberOfCountries: null,
  globalData: {},
  slideIndex: 0,
  dataExpiration: '',
  isDataExpired: false,
  offset: 0,
  showModal: false,
  displayMode: 'SCROLL',
  views: Object.values(MODAL_VIEWS).map(({ name }, index) => ({
    name,
    value: index,
  })),
  current: MODAL_VIEWS.SCROLL.name,
  default: MODAL_VIEWS.SCROLL.name,
  roles: [
    {
      mode: 'SCROLL',
      render: function scroll() {
        return <Scroll />;
      },
    },
    {
      mode: 'CAROUSEL',
      render: function carousel() {
        return <Carousel />;
      },
    },
    {
      mode: 'INFO',
      render: function info() {
        return <div />;
      },
    },
  ],
};

const isStepValid = payload => Object.keys(MODAL_VIEWS).includes(payload);

export const api = createReducer(initialState, {
  [INIT_COUNTRIES]: (state, action) => ({
    ...state,
    countries: action.payload,
  }),
  [INIT_NUMBER_OF_COUNTRIES]: (state, action) => ({
    ...state,
    numberOfCountries: action.payload,
  }),
  [INIT_GLOBAL_DATA]: (state, action) => ({
    ...state,
    globalData: action.payload,
  }),
  [INIT_FLAGS]: (state, action) => ({
    ...state,
    flags: action.payload,
  }),
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
  [SET_SLIDE_INDEX]: (state, action) => ({
    ...state,
    slideIndex: action.payload,
  }),
  [SET_MODE_INDEX]: (state, action) => ({
    ...state,
    modeIndex: action.payload,
  }),
  [SET_CURRENT_MODE]: (state, action) => ({
    ...state,
    current: action.payload && isStepValid(action.payload) ? action.payload : state.default,
  }),
});
