// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './singleStore/store.js'
console.log(store)


// Vue.config.productionTip = false

// Vue.use(Vuex);

// const store=new Vuex.Store({
// 	state:{
// 		count:0
// 	},
// 	mutations:{
// 		increment(state){
// 			state.count++;
// 		},
// 		decrement(state){
// 			state.count--;
// 		}
// 	}
// })s






/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // data:{
  // 	store:store
  // },
  router,
  render:h=>h(App)
})
