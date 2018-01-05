<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
<div>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div>
<!-- <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio> -->
    <el-slider v-model="value1"></el-slider>
    <div class="less"> 
        <p> 
            <span>  hello less</span>

        </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      value1:0,
      radio: '1'
    }
  }
}
</script>

<style scoped  lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.less{
  border: 1px solid;
  p{
    background: red;
    span{
      color:#fff;
    }
  }
}


</style>
