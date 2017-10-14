if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers');
    store.replaceReducer(nextRootReducer);
  });
}
