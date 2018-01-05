<template>
	<div id="foo">
			{{msg}}
			<div class="router-link link">
				<router-link to="/foo">foo1</router-link>
				<router-link to="/foo/foo2">foo2</router-link>
				<router-link :to="{name:'foo3'}">foo3</router-link>

			</div>

			<router-view></router-view>


	</div>


</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				msg:'foo'
			}
		}
	} 


</script>
<style type="text/css">
	.router-link{
		margin-top: 30px;
	}


</style>