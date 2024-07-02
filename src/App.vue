<template>
  <NavComp/>
  <FooterComp/>

  <router-view/>
</template>
<script>
import NavComp from "./components/NavComp";
import FooterComp from "./components/FooterComp.vue";
export default {
  components:{
    NavComp,
    FooterComp
  }
}
</script>

<style>
body{
  background-color:#EAEFBD;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
*{
  font-family: "Arsenal SC", sans-serif;
}

</style>
