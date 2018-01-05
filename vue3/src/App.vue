<template>
  <div id="app">
   <!--  <img src="./assets/logo.png">
    <router-view/> -->
    <input type="button" value="增加" @click='jia'>
    <input type="button" value="减少" @click="jian">
    <p>现在的数值是：{{count}} ,{{getOdd}}</p>

    


  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
