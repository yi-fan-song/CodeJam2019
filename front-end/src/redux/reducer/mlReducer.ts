import { Action as ReduxAction, AnyAction, applyMiddleware } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { StoreState } from './rootReducer';
import axios from 'axios';

// ACTION TYPE CONSTANTS
const SET_USERNAME = 'SET_USERNAME';
const SET_TOKEN = 'SET_TOKEN';
const SET_QUERY = 'SET_QUERY';
const REMOVE_USERNAME = 'REMOVE_USERNAME';
const REMOVE_TOKEN = 'REMOVE_TOKEN';
const REMOVE_QUERY = 'REMOVE_QUERY';
const FETCHED_JIRA = 'FETCHED_JIRA';

export interface Item {
  name: string,
  count: number
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
export const setListAction = (list: Item[]): SetListAction => ({
  type: SET_LIST,
  list: list
});
export const removeListAction = (item: Item): RemoveItemAction => ({
  type: REMOVE_ITEM,
  item: item
});

// Action Interfaces
interface RemoveUsernameAction extends ReduxAction {
  type: 'REMOVE_USERNAME';
}
interface RemoveTokenAction extends ReduxAction {
  type: 'REMOVE_TOKEN';
}
interface RemoveQueryAction extends ReduxAction {
  type: 'REMOVE_QUERY';
}
interface SetUsernameAction extends ReduxAction {
  type: 'SET_USERNAME';
  username: string;
}
interface SetTokenAction extends ReduxAction {
  type: 'SET_TOKEN';
  token: string;
}
interface SetQueryAction extends ReduxAction {
  type: 'SET_QUERY';
  query: string;
}
interface FetchedJiraAction extends ReduxAction {
  type: 'FETCHED_JIRA';
  response: any;
  success?: boolean;
}


interface FetchedListAction extends ReduxAction {
  type: 'FETCHED_LIST';
  response: any;
  success?: boolean;
}

type Action =
  | RemoveUsernameAction
  | RemoveTokenAction
  | RemoveQueryAction
  | SetUsernameAction
  | SetTokenAction
  | SetQueryAction
  | FetchedJiraAction
  | SetListAction
  | RemoveItemAction
  | FetchedListAction;

// Action Creators
export const setUsernameAction = (username: string): SetUsernameAction => ({
  type: SET_USERNAME,
  username: username
});

export const setTokenAction = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  token: token
});

export const setQueryAction = (query: string): SetQueryAction => ({
  type: SET_QUERY,
  query: query
});

export const resetUsernameAction = (): ReduxAction => ({
  type: REMOVE_USERNAME
});

export const resetTokenAction = (): ReduxAction => ({
  type: REMOVE_TOKEN
});

export const resetQueryAction = (): ReduxAction => ({
  type: REMOVE_QUERY
});

export const fetchedJiraAction = (
  response: any,
  success?: boolean
): FetchedJiraAction => ({
  type: FETCHED_JIRA,
  response: response,
  success: success
});

export const fetchedListAction = (
  response: any,
  success?: boolean
): FetchedListAction => ({
  type: FETCHED_LIST,
  response: response,
  success: success
});

// Reducer State
export interface MlState {
  list: Item[];
  response: any;
}

const initialMlState: MlState = {
  list: [
    { name: "apple", count: 2},
    { name: "banana", count: 5},
    { name: "something", count: 10}
  ],
  response: ''
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
        return state
      }
      return { ...state, list: action.response.payload.list }
    }
    case SET_LIST: {
      return { ...state, list: action.list }
    }
    default: {
      return state;
    }
  }
};

// Redux Thunk
// export const fetchJiraTickets = (): ThunkAction<
//   Promise<void>,
//   StoreState,
//   {},
//   AnyAction
// > => {
//   return (
//     dispatch: ThunkDispatch<StoreState, {}, AnyAction>,
//     getState
//   ): Promise<void> => {
//     const { ml } = getState();
//     console.log('I did stuff');
//     axios({
//       method: 'get',
//       url: 'https://123loadboard.atlassian.net/rest/api/2/search',
//       auth: {
//         username: ml.username,
//         password: ml.token
//       },
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       params: { jql: encodeURI(ml.query) }
//     })
//       .then(res => {
//         console.log('I did stuff');
//         return dispatch(fetchedJiraAction(res, true));
//       })
//       .catch(e => {
//         console.log(e);
//         return dispatch(fetchedJiraAction(e, false));
//       });

//     return Promise.resolve();
//   };
// };

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
    console.log('I did stuff');
    axios({
      method: 'get',
      url: 'http://stuff',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {}
    })
      .then(res => {
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
