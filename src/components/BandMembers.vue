<template>
  <!-- <v-container>
    <v-layout row>
      <v-flex xs6>
        <div
          v-for="(member, index) in getBand"
          :key="index">
            <v-img :src="member.img"></v-img>
            <h3 class="headline mb-0"> {{ member.name }} </h3>
            <div> {{ member.bio }} </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container> -->
  <div>
      <!-- <v-card-title>{{ member.name }}</v-card-title> -->
      <!-- <v-divider></v-divider> -->
    <v-layout row>
      <v-card>
        <v-img :src="member.img"></v-img>
        <h3 class="headline mb-0"> {{ member.name }} </h3>
        <div> {{ member.bio }} </div>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "BandMembers",
  // computed: {
  //   getBand () {
  //     return this.$store.getters.getBand
  //   }
  // },
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  
</style>
