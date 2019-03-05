<template>
  <div class="utilities">
    <h1>Services & Utilities</h1>
    <p>The following specifies which services are, and which services are not, included in the lawful rent for the rental unit:</p>
    <div         
      v-for='item in services' 
      :key=item
      class="utility-row"
    >
    <span>{{item}}</span>
      <Radio />
    </div>
    <div id="additional-utilities">
      <v-checkbox
        v-model="checkbox"
        :label="`Add other services or utilities: ${checkbox.toString()}`"
      ></v-checkbox>
    </div>
    <div class="centered" v-show="checkbox">
      <label>Number of additional services or utilities: </label> &nbsp;
      <input class="custom-number" type="number" min="0" v-model="other" placeholder="enter number here">
    </div>
    <div v-show="other">
      <div 
        v-for="n in Number(this.other)"
        :key="n"
        class="utility-row"
        v-show="other"
      >
        <v-text-field
          :counter="35"
          label="Other service or utility"
          required
        ></v-text-field>
        <Radio />
      </div>
    </div>
  </div>
</template>

<script>
import Radio from '../components/Radio'

export default {
  name: 'Utilities',
  components: {
      Radio
  },
  data () {
    return {
      other: 0,
      checkbox: false,
      services: [
        'Gas',
        'Air conditioning',
        'Additional storage space',
        'On-Site Laundry',
        'Guest Parking',
      ],
    }
  },
  methods: {
    removeAdditional: function() {
      // console.log('turn off');
      // this.other == 0;
    }
  }
}
</script>

<style scoped>
.centered{
  display: flex;
  justify-content: center;
  align-items: center;
}
#additional-utilities{
  display: flex;
  justify-content: center;
  align-items: center;
}
#additional-utilities .v-input{
  justify-content: flex-start;
  max-width: 300px;
}
.custom-number{
  border: 1px solid #00bad1;
  color: #00bad1;
  text-align: center;
  border-radius: 10px;
  font-weight: 900;
}
.custom-number:hover{
  color: #00bad1;
}
.custom-number:active{
  color: #00bad1;
}
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