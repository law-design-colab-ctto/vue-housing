<template>
  <div id="parties">
    <h2>Parties to the Agreement</h2>
    <h3>Landloard(s):</h3>
    <div id="landlord-names">
      <MoreNames 
        title="landlords"
        v-bind:amount="landloards"
      />
      <Name 
        v-for="n in Number(this.landloards)"
        :key="n"
      />
    </div>
    <h3>Tenant(s):</h3>
    <div id="tenant-names">
      <MoreNames
        title="tenants"
        v-bind:amount="tenants"
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
import MoreNames from '../components/MoreNames.vue'

export default {
  name: 'Parties',
  components: {
    Name,
    MoreNames,
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
  }
}
</script>

<style scoped>

</style>