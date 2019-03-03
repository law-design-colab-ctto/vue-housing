<template>
  <v-container fluid px-0>
    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="item in answers"
        :key="item.id"
        :label="item.name"
        :value="n"
      ></v-radio>
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
              ],
          }
      }
  }
</script>

<style>
.v-input__control{
    width: 100%;
}
</style>