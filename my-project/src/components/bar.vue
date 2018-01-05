<template>
	<div id="bar"> 
		{{bar}}
		
		<div class="router">
			<router-link v-for="item in barList" :to="{path:/bar/+item.id,query:{user:'gjw',id:item.id}}">
				<!-- <span @click="getBarID(item.id)"> -->
					{{item.barName}}
				<!-- </span> -->
				
			</router-link>			
		</div>
		<div>barID: {{ $route.params.id?$route.params.id:1 }}</div>
		<div>query: {{ $route.query }}</div>
		<div>hash: {{ $route.hash }}</div>


	</div>

</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				bar:'bar',
				barList:[
						{id:1,barName:'b1'},
						{id:2,barName:'b2'},
						{id:3,barName:'b3'},
				],
				barId:"",
				query:'?user=gjw'
			}
			
		},
		mounted(){
			// console.log(this)
			this.getBarID();
		},
		watch:{
			$route(to,from){
				// console.log(to.meta.index  , from.meta.index);
			}
		},
	  beforeRouteUpdate (to, from, next) {
    	// console.log(to,from,next);
    		next();

  	},
		methods:{
			getBarID(id){
					// console.log(this.$route.params.id);
			}
		}
	}



</script>
<style type="text/css">
	.router{
		margin:50px 0;
	}
	.router a{
		margin: 0 80px;
	}
	.router-link-active{
		/*color: red;*/
	}
</style>