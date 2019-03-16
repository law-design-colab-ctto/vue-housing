<template>
  <v-form id="unit">
    <h2>{{ $t("Unit") }}</h2>
    <p>{{ $t("The landlord will rent to the tenant the unit at the following address")}}:</p>
        <AddressForm />
        <MoreFields         
          title="vehicle parking spaces"
          v-bind:amount="parkingSpaces"
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
  }
}
</script>

<style scoped>

</style>