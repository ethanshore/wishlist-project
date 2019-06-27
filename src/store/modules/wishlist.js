// Wishlist array in Vuex store with mutations/actions to remove and add products to wishlist.

const defaultState = () => ({
    wishList: [],
  })
    
  export default {
    namespaced: true,
    state: defaultState(),
    getters: {
      WISHLIST: state => {
        return state.wishList
      }
    },
    mutations: {
      ADD: (state, item) => {
        state.wishList.push(item)
      },
      REMOVE: (state, item) => {
        state.wishList.splice(state.wishList.indexOf(item), 1)
      }
    },
    actions: {
      ADDACTION: (context, item) => {
        context.commit('ADD', item)
      },
      REMOVEACTION: (context, item) => {
        context.commit('REMOVE', item)
      }
    }
  }
  