import React, { useEffect } from 'react';
import './App.css';
import { InventoryLayout } from './views/inventoryLayout';
import { getList } from './redux/inventoryStates/api';
import { LIST_URL } from './services/endpoint';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <InventoryLayout />
    </Provider>
  );
}

export default App;
