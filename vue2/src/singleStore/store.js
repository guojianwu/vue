import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);



const state={
	count:4
}
const mutations={
	jia(state){
		state.count++;
	},
	jian(state){
		state.count--;
	}
}

const actions={
		jia:({commit})=>{
		   commit('jia');
		},
		jian(context){
				context.commit('jian')
		},
		test(){
			alert('text')
		}
}

const getters={
	count(state){
		return state.count;
	},
	getOdd(state){
		return state.count%2==0?'偶数':'奇数';
	}
}



export default new Vuex.Store({
	  state,
	  mutations,
	  actions,
	  getters
	  
})