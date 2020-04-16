const actions = {
	increment({ commit }) {
		commit('increment')
	},
	decrement({ commit }) {
		commit('decrement')
	},
	incrementIfOdd({ commit }) {
		commit('incrementIfOdd')
	},
	incrementAsync({ commit }) {
		setTimeout(() => {
			commit('increment')
		}, 1000)
	}

}
export default actions
