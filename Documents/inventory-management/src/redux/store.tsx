import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import inventoryReducer from './inventoryStates/slice';

// Combine reducers
const rootReducer = combineReducers({
  inventory: inventoryReducer,
});

// Middleware setup
const middleware: any = [thunk]; // Add other middleware if needed

// Create store with rootReducer, initial state, middleware, and enhancers
const store: any = createStore(
  rootReducer,
  {}, // Initial state
  composeWithDevTools(applyMiddleware(...middleware)) // Use composeWithDevTools
);

export default store;
