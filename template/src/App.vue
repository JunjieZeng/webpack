<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  code{
    text-align: left;
  }
  .tip{
    text-align: left;
  }
  pre{
    text-align: left;
  }
</style>
