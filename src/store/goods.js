

export const goods = {
    state: {
        goods: []
    },
    mutations: {
        setGoodsData(state, data)  {
            state.goods = data
        }
    },
    actions: {
        setGoodsData({commit}, data) {
            commit('setGoodsData', data)
        }
    },
    getters: {
        getGoodsCard(state) {
            return state.goods
        },
        getGoodsById(state) {   
            return (id) => {  
                return state.goods.find((card) => card.id === +id)
            }
        }
    }
}