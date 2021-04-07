import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import Taro from '@tarojs/taro';
import { isType } from '@/utils';
import rootReducer from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares = [thunkMiddleware];

// 微信小程序内持久化
const createNoopStorage = () => {
  return {
    getItem(_key) {
      const value = Taro.getStorageSync(_key);
      return Promise.resolve(value);
    },
    setItem(_key, value) {
      Taro.setStorageSync(_key, value);
      return Promise.resolve(value);
    },
    removeItem(_key) {
      Taro.removeStorageSync(_key);
      return Promise.resolve();
    },
  };
};

const persistConfig = {
  key: 'root',
  storage: isType(window, 'Object')
    ? createNoopStorage()
    : createWebStorage('local'),
  whitelist: ['counterPersist', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (
  process.env.NODE_ENV === 'development' &&
  process.env.TARO_ENV !== 'quickapp'
) {
  middlewares.push(require('redux-logger').createLogger());
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function configStore() {
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
}

export default configStore();
