<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->  
    <transition>
     <router-view/>
    </transition>
    <div class="router-link">
      <router-link to='/'>Go to index</router-link>
      <router-link to='/foo'>Go to Foo</router-link>
      <router-link to='/bar'>Go to Bar</router-link>
      <router-link to='/barsde'>Go to ??</router-link>
    </div>
    
  

    {{msg}}
    <p>{{ this.$root.$data.appMsg}}</p>




    <div style="margin-top:100px">
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
      <p>text test</p>
    </div>






  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
       msg:'hello vue'
     }
  },
  watch:{
    $route(to,from){
      // console.log(to,from)
    }
  },
  created(){
    console.log(this.$router.currentRoute)
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

.router-link a{
  margin:0 50px;
}
.router2{
  margin-top: 200px;
}
.router2 a{
  margin:0 50px;
}
 .v-enter,.v-leave-to{
    opacity:0;
  }
  .v-enter-active,.v-leave-active{
    transition:opacity .5s;
  }
</style>
