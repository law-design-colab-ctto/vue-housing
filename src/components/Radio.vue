<template>
  <v-container>
    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="item in answers"
        :key="item.id"
        v-bind:label="$t(item.name)"
        :value="item.name"
      >
      </v-radio>
    </v-radio-group>
  </v-container>
</template>


<script>
  export default {
      data () {
          return {
              radioGroup: 1,
              answers: [{
                  id: 0,
                  name: "Yes"
                },
                {
                  id: 1,
                  name: "No"
                },
                {
                  id: 2,
                  name: "No Charge"
                },
                {
                  id: 3,
                  name: "Pay Per Use"
                },
              ],
          }
      }
  }
</script>

<style>
.v-input__control {
    width: 100%;
}
.container {
  width: 40%;
  max-width: 40%;
  margin: unset;
  padding: 0;
}
.v-input--radio-group__input {
  display: flex;
  flex-direction: row !important;
}
.v-input--radio-group__input span {
  align-self: end;
}
</style>