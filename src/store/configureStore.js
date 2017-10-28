import { createStore } from 'redux';

import rootReducer from '../reducers/index';

export default function configureStore() {
  let store = createStore(rootReducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
