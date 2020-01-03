<template>
  <div id="app">
    <div v-if="$route.path.indexOf('/login') == -1"><nav-bar></nav-bar></div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar';

export default {
  components:{
    NavBar
  },
}
</script>

<style>
@import "./assets/css/icon.css";

</style>
