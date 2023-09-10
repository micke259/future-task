
import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  filters: filterReducer,
});

export default rootReducer;
