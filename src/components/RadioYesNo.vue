<template>
  <v-container>
    <v-radio-group v-model="value">
      <span>{{label}}</span>
      <v-radio
        class="radio"
        v-for="item in answers"
        :key="item.id"
        :label="item.name"
        :value="item.value"
        @change="valueChanged"
      >
      </v-radio>
    </v-radio-group>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        value: false,
        answers: [
          {
            id: 1,
            name: "Yes",
            value: true
          },
          {
            id: 0,
            name: "No",
            value: false
          },
        ],
      }
    },
    props: [
      'label',
    ],
    methods: {
      valueChanged: function() {
        this.value ? this.value = false : this.value = true;
        this.$emit('valueChanged', this.value)
      }
    }
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
</style>