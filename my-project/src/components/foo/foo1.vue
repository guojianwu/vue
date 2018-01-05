<template>
	<div class="foo1"> 
		{{foo1}}
			<p @click="changeAppMsg">{{ this.$root.$data.appMsg}}</p>
		
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return {
			foo1:'foo1'
		}
	},
	methods:{
		changeAppMsg(){
			console.log(this.$root.$data.appMsg='changeAppMsg')
		}
	}
}



</script>