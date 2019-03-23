<template>
  <div id="parties">
    <h1>{{ $t("Parties to the Agreement") }}</h1>
    <h3>{{ $t("Landlords") }}:</h3>
    <div id="landlord-names">
      <MoreFields 
        title="landlords"
        v-on:amountChanged="updateLandlords($event)"
        startingAmount="1"
      />
      <Name 
        v-for="n in Number(this.landlords)"
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
    <h2>{{ $t("Contact Information") }}</h2>
    <p>{{ $t("Address for Giving Notice or Documents to the Landlord") }}</p>
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
      landlords: 1,
      tenants: 3,
    }
  },
  props: [

  ],
  methods: {
    updateLandlords: function(updatedAmount) {
      this.landlords = updatedAmount;
    },
    updateTenants: function(updatedAmount) {
      this.tenants = updatedAmount;
    }
  }
}
</script>

<style scoped>

</style>