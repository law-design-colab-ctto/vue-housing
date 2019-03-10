<template>
  <v-form id="unit">
    <h2>Unit</h2>
    <p>The landloard will rent to the tenant the unit at the following address:</p>
        <AddressForm />
        <MoreFields         
          title="vehicle parking spaces"
          v-model="parkingSpaces"
          v-on:amountChanged="updateAmount($event)"
        />
    <v-container>
      <v-layout 
        row wrap
        v-for="n in Number(this.parkingSpaces)"
        :key="n"
      >
        <v-flex 
          xs12 sm2 md2
        >
          <p>({{n}}) Parking spot:</p>
        </v-flex>
        <v-flex xs12 sm10 md10>
          <v-text-field
            label="Description of parking spot (e.g., indoor/outdoor, location, etc.)"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import AddressForm from '../components/AddressForm'
import MoreFields from '../components/MoreFields'

export default {

  name: 'Rent',
  components: {
    AddressForm,
    MoreFields
  },
  data () {
    return {
      parkingSpaces: 0,
    }
  },
  methods: {
    updateAmount: function(updatedAmount) {
      this.parkingSpaces = updatedAmount;
    }
  }
}
</script>

<style scoped>

</style>