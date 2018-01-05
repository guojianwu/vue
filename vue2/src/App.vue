<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p @click="test">test</p>
    <p>
      <button @click="jia">+</button>
      {{count}}
       <button @click="jian">-</button>
       <p>{{getOdd}}</p>
    </p>

    <my-foo></my-foo>
    
    <!-- <router-view/> -->
  </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex'

// console.log(mapActions )

import Foo from './components/Foo'
export default {
  components:{
    'my-foo':Foo
  },
  computed:mapGetters([
      'count',
      'getOdd'
  ]),

  methods:mapActions([
        'jia',
        'jian',
        'test'

  ]),


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
