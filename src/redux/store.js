import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import countryReducer from './countrySlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countryReducer,
  },
});

export default store;
