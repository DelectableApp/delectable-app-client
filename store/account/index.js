export const REGISTER_IS_LOADING = 'REGISTER_IS_LOADING';
export const LOGIN = 'LOGIN';
export const LOGIN_IS_LOADING = 'LOGIN_IS_LOADING';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_IS_LOADING = 'LOGOUT_IS_LOADING';
export const SEND_RESET_PASSWORD_TOKEN_IS_LOADING = 'SEND_RESET_PASSWORD_TOKEN_IS_LOADING';
export const RESET_PASSWORD_IS_LOADING = 'RESET_PASSWORD_IS_LOADING';

const state = {
  registerIsLoading: false,
  loginIsLoading: false,
  logoutIsLoading: false,
  sendResetPasswordTokenIsLoading: false,
  resetPasswordIsLoading: false,
  isAuthenticated: false,
  id: null,
  email: null,
  login: null,
  firstname: null,
  lastname: null,
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  getId: state => state.id,
  getEmail: state => state.email,
  getLogin: state => state.login,
  getFirstname: state => state.firstname,
  getLastname: state => state.lastname,
  registerIsLoading: state => state.registerIsLoading,
  loginIsLoading: state => state.loginIsLoading,
  logoutIsLoading: state => state.logoutIsLoading,
  sendResetPasswordTokenIsLoading: state => state.sendResetPasswordTokenIsLoading,
  resetPasswordIsLoading: state => state.resetPasswordIsLoading
};

const mutations = {
  [REGISTER_IS_LOADING] (state, bool) {
    state.registerIsLoading = bool;
  },

  [LOGIN] (state, { user_id, user_email, user_login, user_first_name, user_last_name }) {
    state.isAuthenticated = true;
    state.id = user_id;
    state.email = user_email;
    state.login = user_login;
    state.firstname = user_first_name;
    state.lastname = user_last_name;
  },

  [LOGIN_IS_LOADING] (state, bool) {
    state.loginIsLoading = bool;
  },

  [LOGOUT] (state) {
    state.isAuthenticated = false;
    state.id = null;
    state.email = null;
    state.login = null;
    state.firstname = null;
    state.lastname = null;
  },

  [LOGOUT_IS_LOADING] (state, bool) {
    state.logoutIsLoading = bool;
  },

  [SEND_RESET_PASSWORD_TOKEN_IS_LOADING] (state, bool) {
    state.sendResetPasswordTokenIsLoading = bool;
  },

  [RESET_PASSWORD_IS_LOADING] (state, bool) {
    state.resetPasswordIsLoading = bool;
  },
};

const actions = {
  async login({ commit }, { user_email, user_login, user_password }) {
    try {
      commit(LOGIN_IS_LOADING, true);
      await setTimeout(() => {
        commit(LOGIN, {
          user_id: 1,
          user_email: 'toto@tata.fr',
          user_login: 'guillaume.hess',
          user_first_name: 'Guillaume',
          user_last_name: 'Hess',
        });
      }, 2000);
      return res;
    } catch (e) {
      return e;
    } finally {
      commit(LOGIN_IS_LOADING, false);
    }
  },

  logout({ commit }) {
    commit(LOGOUT_IS_LOADING, true);
    setTimeout(() => {
      commit(LOGOUT);
      commit(LOGOUT_IS_LOADING, false);
    }, 500);
  },

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
