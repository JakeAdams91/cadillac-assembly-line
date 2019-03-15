<template>
  <v-app>
    <toolbar />
    <!-- <nav-drawer /> -->
    <HomePage/>
  </v-app>
</template>

<script>
import Toolbar from './components/navigation/Toolbar'
// import NavDrawer from './components/navigation/NavDrawer'    -- if used
import HomePage from './components/HomePage.vue'
export default {
  name: 'app',
  components: {
    HomePage,
    Toolbar,
    // NavDrawer   -- if used
  }
}
</script>

<style>

</style>
