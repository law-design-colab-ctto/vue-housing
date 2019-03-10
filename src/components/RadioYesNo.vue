<template>
  <v-container>
    <v-radio-group v-model="radioGroup">
      <span>{{label}}</span>
      <v-radio
        class="radio"
        v-for="item in answers"
        :key="item.id"
        :label="item.name"
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
                answers: [
                {
                  id: 0,
                  name: "Yes"
                },
                {
                  id: 1,
                  name: "No"
                },
            ],
        }
    },
    props: [
      'label'
    ],
  }
</script>

<style>
.v-input__control{
  width: 100%;
}
.container{
  width: 40%;
  max-width: 40%;
  margin: unset;
  padding: 0;
}
.v-input--radio-group__input{
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: baseline;
}
.v-input{
  justify-content: flex-end !important;
}
</style>