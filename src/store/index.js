import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getter.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
	count: 0,
	history: []
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

if (module.hot) {
	//监听这三个js文件
	module.hot.accept(['./getter.js', './actions.js', './mutations.js'], () => {
		//数据变化了，就去热重载
		store.hotUpdate({
			//getters的值为新的getter.js文件
			getters: require('./getter.js').default,
			mutations: require('./mutations.js').default,
			actions: require('./actions.js').default
		})
	})
}

export default store;
