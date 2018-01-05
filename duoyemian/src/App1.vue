<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p @click='tiaozhuang'>index1</p>
    <a href="index.html">a to index</a>
    <p>{{this.$root.index1}}</p>
    <!-- <router-view/> -->
    <comm></comm>
  </div>
</template>

<script>
import comm from './components/comm'
export default {
  name: 'app',
  components:{
    comm
  },
  methods:{
    tiaozhuang(){
    }
  }
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
