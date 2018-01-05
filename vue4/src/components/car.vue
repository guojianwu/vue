<template>
	<div class="car">
		<button @click="jiaCar">car增加</button>
		<button @click="jianCar">car减少</button>
		<p>car:{{carCount}}</p>


	</div>


</template>
<script type="text/javascript">
import {createNamespacedHelpers} from 'vuex'
const {mapGetters,mapActions} = createNamespacedHelpers('car');
	export default{
		computed:{
			...mapGetters([
				// carCount:state=>state.car.carCount
				'carCount'
			])
		},
		methods:{
			...mapActions([
					'jiaCar',
					'jianCar'
			])
		}

	}


</script>