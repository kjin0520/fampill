import { createStore } from "vuex";
import user from "./modules/user";
import loading from "./modules/loading";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    loading,
  },
});
