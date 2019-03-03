<template>
  <div class="utilities">
    <h1>Services & Utilities</h1>
    <div         
      v-for='item in services' 
      :key=item
      class="utility-row"
    >
    <span>{{item}}</span>
      <Radio />
    </div>
    <div>
      <v-checkbox
        v-model="checkbox"
        :label="`Add other services or utilities: ${checkbox.toString()}`"
      ></v-checkbox>
    </div>
    <div v-show="checkbox">
      <input type="number" v-model="other" placeholder="">
      <p>{{other}}</p>
      <div 
        v-for="n in Number(this.other)"
        :key="n"
      >
        <p>TEST</p>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from './Radio'

export default {
  name: 'Utilities',
  components: {
      Radio
  },
  data () {
    return {
      other: 1,
      checkbox: false,
      services: [
        'Gas',
        'Air conditioning',
        'Additional storage space',
      ],
    }
  }
}
</script>

<style scoped>
.utility-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}
.v-input--radio-group__input{
  flex-direction: row;
}
</style>