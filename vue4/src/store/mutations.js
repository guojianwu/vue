
import Vue from 'vue'

import {JIA,JIAN} from './types'


const mutations ={
	[JIA](state,n){
		state.count+=n;
	},
	[JIAN](state,n){
		state.count-=n;
	}
}


export default mutations;