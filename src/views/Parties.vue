<template>
  <div id="parties">
    <h2>Parties to the Agreement</h2>
    <h3>Landloard(s):</h3>
    <div id="landlord-names">
      <MoreFields 
        title="landlords"
        v-on:amountChanged="updateLandlords($event)"
        startingAmount="1"
      />
      <Name 
        v-for="n in Number(this.landloards)"
        :key="n"
      />
    </div>
    <h3>Tenant(s):</h3>
    <div id="tenant-names">
      <MoreFields
        title="tenants"
        v-on:amountChanged="updateTenants($event)"
        startingAmount="3"
      />
      <Name 
        v-for="n in Number(this.tenants)"
        :key="n"
      />
    </div>
    <h2>Contact Information</h2>
    <p>Address for Giving Notice or Documents to the Landlord</p>
  </div>
</template>

<script>
import Name from '../components/Name.vue'
import MoreFields from '../components/MoreFields.vue'

export default {
  name: 'Parties',
  components: {
    Name,
    MoreFields,
  },
  data () {
    return {
      landloards: 1,
      tenants: 3,
    }
  },
  props: [

  ],
  methods: {
    updateLandlords: function(updatedAmount) {
      this.landloards = updatedAmount;
    },
    updateTenants: function(updatedAmount) {
      this.tenants = updatedAmount;
    }
  }
}
</script>

<style scoped>

</style>