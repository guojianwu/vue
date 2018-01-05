<template>
	<div class="mapState">
		<p>This is mapState</p>
		<p>count:{{count}}</p>
		<p>index:{{index}}</p>
		<p>state.count+this.localCount:{{countPlusLocalState}}</p>
		<p>$store.getters: {{$store.getters.count}}</p>
	

	




	</div>

</template>
<script type="text/javascript">
import {mapState} from 'vuex'
	export default {
		data(){
			return{
				localCount:5

			}
		},
		computed:{
				countPlusLocalState(state){
				return state.count+this.localCount
			},
			...mapState({
				count:state=>state.count,
				index:'index',
			})
		}
		// computed:mapState({
		// 	count:state=>state.count,
		// 	index:'index',
		// 	countPlusLocalState(state){
		// 		return state.count+this.localCount
		// 	}

		// })
	}


</script>