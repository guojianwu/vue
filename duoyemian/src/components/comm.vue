<template>
	<div class="comm">
		<p class="p1">my is comm.vue</p>
		<p>{{msg}}</p>
		<p>comm new msg22222</p>
	</div>


</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				msg:'this is data msg'
			}
		}
	}


</script>
<style lang='less'>
	.comm{
		background: #ccc;
		.p1{
			background: red;
		}
		p{
			/*background:blue;*/
			font-size: 30px;
			margin: 0;
		}
	}


</style>