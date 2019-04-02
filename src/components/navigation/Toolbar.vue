<template>
  <v-toolbar
    app
    dark
    clipped-left
    color="success"
  >
   <!-- if design wants a nav drawer use below code.
    <v-toolbar-side-icon @click="toggleNavigationDisplay"></v-toolbar-side-icon> -->
    <v-toolbar-title
      v-for="(path, index) in getPaths"
      :key="index"> <v-btn flat @click="setPath(path)">{{path}}</v-btn></v-toolbar-title>
    <v-spacer />

  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    setPath (path) {
      this.$store.commit('setPath', path)
    }
    // if team wants nav drawer
    // toggleNavigationDisplay () {
    //   this.$store.commit('toggleNavigationDisplay')
    // }
  },
  computed: {
    getPaths () {
      return this.$store.getters.getPaths
    }
  }
}
</script>
