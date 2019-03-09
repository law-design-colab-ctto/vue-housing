<template>
  <v-form id="utilities">
    <h2>Services & Utilities</h2>
    <p>The following specifies which services are, and which services are not, included in the lawful rent for the rental unit:</p>
      <v-container>
        <div         
          v-for='item in services' 
          :key=item
          class="utility-row"
        >
          <v-layout row wrap>
            <v-flex xs12 sm6 md6>
              <span class="utility-name">{{item}}</span>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <Radio />
            </v-flex>
          </v-layout>
        </div>
          <div id="additional-utilities">
            <v-checkbox
              v-model="checkbox"
              :label="`Add other services or utilities: ${checkbox.toString()}`"
              @change="checkRest"
            ></v-checkbox>
          </div>
          <div class="centered" v-show="checkbox">
            <MoreFields
              title="additional services & utilities"
              v-show="checkbox"
              class="centered"
              v-on:amountChanged="updateAmount($event)"
              v-bind:startingAmount="other"
            />
          </div>
          <div v-show="other">
            <div 
              v-for="n in Number(this.other)"
              :key="n"
              class="utility-row"
              v-show="other"
            >
              <v-layout row wrap>
                <v-flex xs12 sm12 md6>
                  <v-text-field
                    :counter="35"
                    label="Other service or utility"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <Radio />
                </v-flex>
              </v-layout>
            </div>
          </div>

      </v-container>
  </v-form>
</template>

<script>
import Radio from '../components/Radio'
import MoreFields from '../components/MoreFields'

export default {
  name: 'Utilities',
  components: {
      Radio,
      MoreFields,
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
    updateAmount: function(updatedAmount) {
      this.other = updatedAmount;
    },
    checkRest: function() {
      if (!this.checkbox) {
        this.other = 0;
      }
    }
  }
}
</script>

<style scoped>
.utility-name{
  font-weight: 600;
  font-size: 1.2rem;
}
.utility-row span{
  width: 50%;
  min-width: 200px;
}
.utility-row:nth-of-type(odd){
  background-color:#f5f5f5;

}
.v-input{
  width: 100%;
}
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