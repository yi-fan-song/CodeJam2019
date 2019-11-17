import { combineReducers } from "redux";
import { mlReducer, MlState } from '@redux/reducer/mlReducer';

export interface StoreState {
    ml: MlState;
  }

export default combineReducers({ ml:mlReducer });