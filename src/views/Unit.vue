<template>
  <v-form id="unit">
    <h2>{{ $t("Unit") }}</h2>
    <p>{{ $t("The landlord will rent to the tenant the unit at the following address")}}:</p>
        <AddressForm />
        <MoreFields         
          title="vehicle parking spaces"
          v-model="parkingSpaces"
          v-on:amountChanged="updateParking($event)"
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
          <p>({{n}}) {{ $t("parking spot") }}:</p>
        </v-flex>
        <v-flex xs12 sm10 md10>
          <v-text-field
            v-bind:label="$t('parkdescription')"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 sm4 md4>
          <RadioYesNo 
            label="Is the rental unit in a condominium?"
            v-on:valueChanged="checkIfCondo($event)"
          />
        </v-flex>
        <v-flex xs12 sm8 md8 v-if="isCondo">
          <p>The tenant agrees to compy with the condominium declaration, by-laws, and rules, as provided by the landlord</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import AddressForm from '../components/AddressForm'
import MoreFields from '../components/MoreFields'
import RadioYesNo from '../components/RadioYesNo'

export default {

  name: 'Rent',
  components: {
    AddressForm,
    MoreFields,
    RadioYesNo,
  },
  data () {
    return {
      parkingSpaces: 0,
      isCondo: false,
    }
  },
  methods: {
    updateParking: function(updatedAmount) {
      this.parkingSpaces = updatedAmount;
    },
    checkIfCondo: function(valueChanged) {
      this.isCondo = valueChanged;
      console.log(this.isCondo);
    }
  }
}
</script>

<style scoped>
.layout .flex .container .v-input {
  float: left !important;
}
</style>