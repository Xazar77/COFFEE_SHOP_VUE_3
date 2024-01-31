
import { reactive } from 'vue'


export const coffee = reactive({
    state: {
        coffee: [],
        sortValue: ''
    },
    mutations: {
        setCoffeeData(state, data)  {
            state.coffee = data
        },
        setSortValue(state, value)  {
            console.log(value)
            state.sortValue = value
        },
    },
    actions: {
        setCoffeeData({commit}, data) {
            commit('setCoffeeData', data)
        },
        setSortValue({commit}, value) {
            commit('setSortValue', value)
        },
    },
    getters: {
        getCoffeeCard(state) {
            return state.coffee
            // .filter((item) => item.name.toLowerCase().includes(state.searchValue.toLowerCase()))
            // .filter((item) => item.country.toLowerCase().includes(state.sortValue.toLowerCase()))
        },
        getCoffeeById(state) {   
            return (id) => {  
                return state.coffee.find((card) => card.id === +id)
            }
        }
    }
})