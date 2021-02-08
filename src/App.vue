<template>
  <div>
    <header>
      <Navbar></Navbar>
      <Id v-if="$store.getters.user.loggedIn" class="usuario"></Id>
    </header>
    <div id="cuerpo">
      <Transicion></Transicion>
    </div>
    <footer>
      <v-container> 
      <v-row>
        <v-col>
          <Moments></Moments> 
        </v-col>
      </v-row>
      <v-row>
        <Footer></Footer>
      </v-row>
      </v-container>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Moments from "./components/Moments.vue";
import Transicion from './components/Transicion.vue';
import Footer from './components/Footer.vue';
import Id from "./components/Id.vue";


export default {
  name: "App",
  components: {
    Navbar,
    Id,
    Moments,
    Transicion,
    Footer,

  },
};
</script>

<style lang="css">
@import "../src/assets/css/main.css";
</style>