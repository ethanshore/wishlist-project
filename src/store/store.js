import Vue from 'vue'
import Vuex from 'vuex'
import wishlist from './modules/wishlist'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    wishlist
  }
})