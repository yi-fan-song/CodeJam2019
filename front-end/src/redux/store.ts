import { createStore, compose, Store, applyMiddleware } from 'redux';
import Reactotron from '@/ReactotronConfig';
import rootReducer from '@reducer/rootReducer';
import thunk from 'redux-thunk';

let store: Store;

if (Reactotron.createEnhancer) {
    store = createStore(
      rootReducer,
      compose(
        applyMiddleware(thunk),
        Reactotron.createEnhancer()
      )
    );
  } else {
    store = createStore(rootReducer, applyMiddleware(thunk));
  }

export default store; 