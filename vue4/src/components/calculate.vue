<template>
	<div class="calculate">
		<button @click='calJia'>cla加</button>
		<button @click="calJian">cla减</button>
		<p>	cal:{{calCount}}</p>
	</div>

</template>
<script type="text/javascript">
import {createNamespacedHelpers} from 'vuex'
const {mapState,mapActions}=createNamespacedHelpers('calculate');

	 export default{
	 		computed:{
	 			...mapState([
	 				'calCount'
	 			])
	 		},
	 		methods:{
	 			...mapActions({
	 				calJia:'calJia',
	 				calJian:'calJian'
	 			})
	 		}
	 }
</script>