<template>
  <div>
      <v-card
        color="#ecf2f9"
        flat>
        <v-img :src="member.img" width="250" height="250"></v-img>
        <h3 class="headline mb-0"> {{ member.name }} </h3>
        <div> {{ member.bio }} </div>
      </v-card>
  </div>
</template>

<script>
export default {
  name: "BandMembers",
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
