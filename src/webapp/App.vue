<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/" exact>首页</router-link>
        <router-link to="/test">测试页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/topics">新闻列表</router-link>
      </li>
    </ul>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  ul li{
    list-style: none;
  }
</style>
