import { Action as ReduxAction, AnyAction, applyMiddleware } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { StoreState } from './rootReducer';
import axios from 'axios';

export interface Item {
  name: string,
  quantity: number
}

// actually stuff
const SET_LIST = 'SET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';
const FETCHED_LIST = 'FETCHED_LIST';

interface SetListAction extends ReduxAction {
  type: 'SET_LIST';
  list: Item[];
}
interface RemoveItemAction extends ReduxAction {
  type: 'REMOVE_ITEM';
  item: Item;
}
interface FetchedListAction extends ReduxAction {
  type: 'FETCHED_LIST';
  response: any;
  success?: boolean;
}

export const setListAction = (list: Item[]): SetListAction => ({
  type: SET_LIST,
  list: list
});
export const removeListAction = (item: Item): RemoveItemAction => ({
  type: REMOVE_ITEM,
  item: item
});
export const fetchedListAction = (
  response: any,
  success?: boolean
): FetchedListAction => ({
  type: FETCHED_LIST,
  response: response,
  success: success
});


type Action =
  | SetListAction
  | RemoveItemAction
  | FetchedListAction;

// Reducer State
export interface MlState {
  list: Item[];
  response: any;
  error: any;
}

const initialMlState: MlState = {
  list: [ ],
  response: '',
  error: ''
};

// Reducer
export const mlReducer   = (
  state: MlState = initialMlState,
  action: Action
) => {
  switch (action.type) {
    case REMOVE_ITEM: {
      var newList = state.list.slice(state.list.indexOf(action.item), 1);
      
      return { ...state, list: newList}
    }
    case FETCHED_LIST: {
      if (!action.success) {
        return { ...state, error: action.response }
      }
      return { ...state, response: action.response, list: action.response.data.items }
    }
    case SET_LIST: {
      return { ...state, list: action.list }
    }
    default: {
      return state;
    }
  }
};

export const fetchList = (): ThunkAction<
  Promise<void>,
  StoreState,
  {},
  AnyAction
> => {
  return (
    dispatch: ThunkDispatch<StoreState, {}, AnyAction>,
    getState
  ): Promise<void> => {
    const { ml } = getState();
    axios({
      method: 'get',
      url: 'http://codejam-api.yifansong.ca/grocery/list'
    }).then(res => {
        console.log('I did stuff');
        return dispatch(fetchedListAction(res, true));
      })
      .catch(e => {
        console.log(e);
        return dispatch(fetchedListAction(e, false));
      });

    return Promise.resolve();
  };
};
