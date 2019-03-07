<template>
  <div id="unit">
    <h2>Unit</h2>
    <p>The landloard will rent to the tenant the unit at the following address:</p>
    <AddressForm />
  </div>
</template>

<script>
import AddressForm from '../components/AddressForm'

export default {

  name: 'Rent',
  components: {
    AddressForm
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>