import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import car from './modules/car'
import calculate from './modules/calculate'

console.log(calculate)


Vue.use(Vuex);




export default new Vuex.Store({
		state,
		mutations,
		actions,
		getters,
		modules:{
			car,
			calculate
		}
})