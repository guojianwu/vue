import {JIA,JIAN} from './types'


const mutations={
	[JIA](state){
			state.count++;
	},
	[JIAN](state){
		state.count--;
	}
}

export default mutations;