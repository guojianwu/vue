<template>
	<div class="foo">
			<input type="button" value="foo的增加" @click='jia(20)'>
			<input type="button" value="foo的减少" @click='jian(10)'>
			<!-- {{$store.state.count}} -->
			<p><button @click='test'>foo_count++</button>:{{count}}</p>
	</div>
</template>

<script type="text/javascript">
import {mapGetters,mapActions} from 'vuex'
	export default {
		data(){
				return{
					count:1
				}
		},
		methods:mapActions({
			jia:'jia',
			jian:"jian",
			test(){
				this.count++
			}
		})
		// methods:mapActions([
		// 		'jia',
		// 		'jian'
		// ])
	}
</script>