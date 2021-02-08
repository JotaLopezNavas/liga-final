import Vue from "vue";
import Vuex from "vuex";
// import module from './module'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    module
  },
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    clicks: 0,
    inputValue: null,
    titNavbar:'NYSL',
    titFooter:'NorthSide Youth Soccer League',
    facebook:'https://web.facebook.com/NorthSideYouthSoccerLeague/?_rdc=1&_rdr',
    instagram:'https://www.instagram.com/northsidesoccerindy/',
    youtube:'https://www.youtube.com/watch?app=desktop&v=dQw4w9WgXcQ&list=PLJmvyRGClNKiEWKe-lJdfNxImgefHCfQJ&index=2',
    twitter:'https://twitter.com/northside_fc',
    moments:"The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is run by a small full-time staff, and relies on the generous volunteer time of parents and previous league members."
  },
  getters: {
    user(state){
      return state.user
    },
    validacion(state){
      return state.user.loggedIn
    },
    titNavbar(state){
      return state.titNavbar
    },
    titFooter(state){
      return state.titFooter
    },
    facebook(state){
      return state.facebook
    },
    instagram(state){
      return state.instagram
    },
    youtube(state){
      return state.youtube
    },
    twitter(state){
      return state.twitter
    },
    moments(state){
      return state.moments
    },
    moduleClicks(state){
      return state.clicks = 2
    },
    clicks: state => state.clicks,
    inputValue: state => state.inputValue
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    INCREMENT_ACTION_CLICKS (state) {
      state.clicks++
    },
    UPDATE_INPUT_VALUE (state, inputValue) {
      state.inputValue = inputValue
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    actionClick ({ commit }) {
      commit('INCREMENT_ACTION_CLICKS')
    },
    actionInput ({ commit }, { inputValue }) {
      commit('UPDATE_INPUT_VALUE', inputValue)
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.validacion
    }
  }
});