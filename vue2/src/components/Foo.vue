<template>
	<div class="foo">
		<p>
			<button @click="jia">+</button>
			{{count}}
			<button @click="jian">-</button>
			<p>{{getOdd}}</p>
		</p>
		
	</div>
	
</template>
<script type="text/javascript">

import {mapGetters,mapActions} from 'vuex'
	export default {
		computed:mapGetters([
				'count',
				'getOdd'

		]),
		methods:mapActions([
				'jia',
				'jian'
		])

	}
</script>