import Vue from 'vue';
import Vuex from 'vuex';

import navigationDrawer from './modules/navigationDrawer';
import snackbar from './modules/snackbar';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigationDrawer,
    snackbar,
    auth,
  },
});
