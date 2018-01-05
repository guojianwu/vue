<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" @click="tiaozhuang"> -->
    <!-- <router-view/> -->
    <a href="index1.html">This is Index go to index1</a>
    <p>{{this.$root.index}}</p>
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
      location.href='./index1.html'
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
