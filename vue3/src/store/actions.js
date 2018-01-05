import * as types from './types'

console.log(types);


const actions={
	jia:({commit})=>{
		commit(types.JIA)
	},
	jian(context){
		context.commit(types.JIAN)
	}

}


export default actions;