import Vuex from 'vuex'
import web3ModalStore from "./modules/web3Modal";
import userStore from "./modules/user";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    web3Modal: web3ModalStore,
    user: userStore,
  }
});
