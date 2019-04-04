<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title>
            Upcoming Shows
          </v-card-title>
          <v-flex offset-xs6 xs6>
            <v-card>
              <v-calendar></v-calendar>
            </v-card>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Calendar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
