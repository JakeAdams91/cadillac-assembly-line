<template>
  <!-- header/toolbar -->
  <v-toolbar
    app
    dark
    scroll-off-screen
    :scroll-threshold="10"
    color="#B0C4DE"
  >
  <!-- create logo -->
    <v-flex xs6 >
      <v-img class="mt-5" :src="require('../../assets/logos/logo3-1.png')" width="350" height="128"></v-img>
    </v-flex>
    <template v-slot:extension>
      <v-spacer/>
      <!-- buttons to navigate the site -->
      <v-toolbar-items>
        <v-btn flat @click="setPath('Home')">Home</v-btn>
        <v-btn flat @click="setPath('About Us')">About Us</v-btn>
        <v-btn flat @click="setPath('Upcoming Shows')">Upcoming Shows</v-btn>
      </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    setPath (path) {
      this.$store.commit('setPath', path)
    }
  },
  computed: {
    getPaths () {
      return this.$store.getters.getPaths
    }
  }
}
</script>
