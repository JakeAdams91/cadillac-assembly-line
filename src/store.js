import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // --- for navigation drawer if used ---
    // NavigationDisplay: false,
    path: 'Home',
    paths: ['Home', 'About Us', 'Upcoming Shows', 'Contact Us']
  },
  getters: {
    // ---- for navigation drawer if used ----
    // getNavigationDisplay (state) {
    //   return state.NavigationDisplay
    // },
    getPaths (state) {
      return state.paths
    },
    getCurrentPath (state) {
      return state.path
    }
  },
  mutations: {
    // ---- for navigation drawer if used ----
    // toggleNavigationDisplay (state) {
    //   state.NavigationDisplay = !state.NavigationDisplay
    // },
    setPath (state, newPath) {
      state.path = newPath
    }
  },
  actions: {

  }
})
