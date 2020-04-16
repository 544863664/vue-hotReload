const limit = 5

//getters就相当于计算属性computed
//将state和geeter里的全放到getter里
const getters = {
	recentHistory(state) {
		const end = state.history.length
		const begin = end - limit > 0 ? end - limit : 0
		return state.history.slice(begin, end)
	},
	count(state) {
		return state.count
	}
}

export default getters
