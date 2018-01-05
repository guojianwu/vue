


const state={
	calCount:30
}

const getters={
	calCount(state){
			return state.calCount;
	}
}

const actions={
	calJia:({commit})=>{
			commit('calJia')
	},
	calJian(context){
		context.commit('calJian')
	}
}

const mutations={
	calJia(state){
		state.calCount++;
	},
	calJian(state){
		state.calCount--;
	}
}


export default{
  namespaced: true,
	state,
	getters,
	actions,
	mutations
}