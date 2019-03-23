<template>
<div id="term">
  <h1>Term</h1>
  <p>The tenancy starts on the following day:</p>
  <v-date-picker v-model="startDate" :landscape=false></v-date-picker>
   <p>This tenacy agreement is for: (select an optionb elow & fill in details as needed)</p>
   <v-container fluid>
    <v-radio-group id="termEnd" v-model="tenancyLength" :mandatory="true" :column=true px-0>
      <v-radio label="a fixed length of time ending on:" value="fixed"></v-radio>
       <v-date-picker v-show="tenancyLength == 'fixed'" v-model="endDate" :landscape=false></v-date-picker>
      <v-radio label="a monthly tenacy:" value="monthly"></v-radio>
      <v-radio label="a weekly tenacy:" value="weekly"></v-radio>
      <v-radio label="a daily tenacy:" value="daily"></v-radio>
      <v-radio label='Other (please specify):' value="other"></v-radio>
    </v-radio-group>
  </v-container>
  <!-- <Note v-bind:note="HELLO"/> -->
</div>
</template>

<script>
import Note from  '@/components/Note.vue';
export default {
  name: 'Term',
  components: {
    Note,
  },
  // props: {
  //   note: string,
  // },
  data () {
    return {
      tenancyLength: '',
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>