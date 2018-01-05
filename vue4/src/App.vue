<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
      <div>
          <!-- {{$store.state.count}} -->
          <button @click='jia'>增加</button>
          <button @click='jian'>减少</button>
          <p>count:{{count}},is:{{getOdd}}</p>
          <p><button @click='addVueApp'>vueApp++</button>:{{vueApp}}</p>
          <my-foo></my-foo>
      </div>
      <div>
        <my-map-state></my-map-state>
      </div>
      <div style="margin-top:50px"> 
        <car></car>

      </div>

      <div style="margin-top:50px;">
        <calculate></calculate> 
      </div>


    
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import Foo from './components/Foo'
import car from './components/car'
import calculate from './components/calculate'
import myMapState from './components/mapState'

export default {
  name: 'app',
  data(){
    return {
      dataApp:100
    }
  },
  components:{
    'my-foo':Foo,
    myMapState,
    car,
    calculate
  },
  computed:{
    vueApp(){
      return this.dataApp+10
    },
    ...mapGetters([
      'count',
      'getOdd'
    ])
  },
  // computed:mapGetters([
  //   'count',
  //   'getOdd'
  // ]),
  methods:{
    ...mapActions([
      'jia',
      'jian'
     ]),
    addVueApp(){
      this.dataApp++;
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
