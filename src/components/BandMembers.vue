<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <div
          v-for="(member, index) in getBand"
          :key="index">
          <v-flex xs4>
            <v-img :src="member.img"></v-img>
          </v-flex>
          <v-flex xs8 offset-xs4>
            <h3 class="headline mb-0"> {{ member.name }} </h3>
            <div> {{ member.bio }} </div>
          </v-flex>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "BandMembers",
  computed: {
    getBand () {
      return this.$store.getters.getBand
    }
  }
}
</script>

<style>
  
</style>
