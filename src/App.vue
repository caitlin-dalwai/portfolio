<!-- <template>
  <NavComp/>
  <FooterComp/>

  <div v-if="!isLoading">
    <router-view />
  </div>
  <LoadingComp v-else />

</template>
<script>
import NavComp from "./components/NavComp";
import FooterComp from "./components/FooterComp.vue";
import LoadingComp from "./components/LoadingComp.vue";
export default {
  components:{
    NavComp,
    FooterComp,
    LoadingComp
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    this.isLoading = false;
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

</style> -->

<template>
  <div id="app">
    <NavComp/>
    <router-view v-if="!isLoading" />
    <FooterComp/>
    <LoadingComp v-if="isLoading" />
  </div>
</template>

<script>
import NavComp from "./components/NavComp";
import FooterComp from "./components/FooterComp.vue";
import LoadingComp from "./components/LoadingComp.vue";

export default {
  name: 'App',
  components: {
    NavComp,
    FooterComp,
    LoadingComp
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    // Simulate loading process (replace with actual data loading logic)
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); 
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
body {
  background-color: #EAEFBD;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
