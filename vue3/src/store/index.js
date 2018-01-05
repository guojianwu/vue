import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

Vue.use(Vuex);

export default new Vuex.Store({
		state,
		mutations,
		actions,
		getters
})
















// var state={
// 	count:10
// }


// var mutations={
// 	jia(state){
// 		state.count++;
// 	},
// 	jian(state){
// 		state.count--;
// 	}
// }

// var actions={
// 	jia:({commit})=>{
// 		commit('jia');
// 	},
// 	jian(context){
// 		context.commit('jian');
// 	}
// }


/*var getters={
	count(state){
			return state.count;
	},
	getOdd(state){
		return state.count%2==0?'偶数':'奇数';
	}
}*/
