 <template>
  <div id="app">
    <NavComp/>
    <router-view/>
    <FooterComp/>
    <LoadingComp v-if="!$store.state.aboutMe" />
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
  computed:{
        getMyInfo(){
            return this.$store.dispatch('getMyInfo')
        }
    },
    mounted(){
        this.getMyInfo
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