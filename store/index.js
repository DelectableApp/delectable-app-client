import Vuex from 'vuex';
import account from './account';

const createStore = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [],
    modules: {
      account,
    },
  });
};

export default createStore;
