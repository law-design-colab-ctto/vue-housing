<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6>
          <v-text-field
            v-bind:label="$t('lastname')"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm12 md6>
          <v-text-field
            v-bind:label="$t('firstname')"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</template>


<script>
  export default {
      data () {
          return {
              landlords: 1,
          }
      },
  }
</script>

<style>
.counter{
  border: 1px solid #00bad1;
  color: #00bad1;
  text-align: center;
  border-radius: 10px;
  font-weight: 900;
}
.container{
    width: 100% !important;
    max-width: 100% !important;
}
</style>