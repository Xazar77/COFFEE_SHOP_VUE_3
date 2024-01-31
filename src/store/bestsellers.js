


export const bestsellers = {
    state() {
        return {
            bestsellers: []
        }
    },
    mutations: {
        setBestsellersData(state, data)  {
            state.bestsellers = data
        }
    },
    actions: {
        setBestsellersData({commit}, data) {
            commit('setBestsellersData', data)
        }
    },
    getters: {
        getBestsellersCard(state) {
            return state.bestsellers
        }
    }
}