//将mutations里的操作全部在actions里触发
const mutations = {
	increment(state) {
		state.count++
		state.history.push('increment')
		console.log(state.history)
	},
	decrement(state) {
		state.count--
		state.history.push('decrement')
		console.log(state.history)
	},
	incrementIfOdd(state) {
		if ((state.count + 1) % 2 == 0) {
			state.count++
		}
	}
}

export default mutations
