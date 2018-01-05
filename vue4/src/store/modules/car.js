
const state={
	carCount:20
}

const getters={
	carCount(state){
			return state.carCount;
	}
}


const actions={
	jiaCar(context){
			context.commit('jiaCar');
	},
	jianCar:({commit})=>{
		commit('jianCar')
	}
}

const mutations={
	jiaCar(state){
		state.carCount++;
	},
	jianCar(state){
		state.carCount--;
	}
}





export default{
	namespaced: true,
	state,
	getters,
	actions,
	mutations
} 