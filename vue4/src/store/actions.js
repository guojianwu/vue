import * as types from './types'


const actions={
	jia:({commit},n)=>{
		var n=typeof n =='number' ?n:1
			commit(types.JIA,n);
	},
	jian(context,n){
		var n=typeof n =='number' ?n:1
		context.commit(types.JIAN,n)
	}
}


export default actions;